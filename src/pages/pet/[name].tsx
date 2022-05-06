import groq from "groq";
import { NextPage } from "next";
import { getClient } from "../../lib/sanity.server";
import { Pet } from "../../types";

const Pet: NextPage<{ pet: Pet }> = ({ pet }) => {
  return (
    <article>
      <h1>{pet?.name}</h1>
      <p>{pet?.description}</p>
      <p>{pet?._id}</p>
    </article>
  );
};

export async function getStaticPaths() {
  const paths = await getClient().fetch<string[]>(
    groq`*[_type == "pet" && defined(name)][].name`
  );

  return {
    paths: paths.map((name) => ({ params: { name } })),
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false }) {
  // It's important to default the name so that it doesn't return "undefined"
  const { name = "" } = params;

  const pet = await getClient(preview).fetch<Pet>(
    groq`
    *[_type == "pet" && name == $name][0]
  `,
    { name }
  );

  return {
    props: {
      pet,
    },
  };
}

export default Pet;
