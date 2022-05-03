import React from "react";

// layout for page
import Footer from "components/Footers/Footer";
import Navbar from "components/Navbars/AuthNavbar";
import Link from "next/link";
import { GetStaticProps } from "next";
import Public from "layouts/Public";
import Admin from "layouts/Admin";

type NewsSummary = {
  title: string;
  excerpt: string;
  date: number;
  url: string;
};

type Props = {
  postData: NewsSummary[];
};

export default function News(props: Props) {
  const { postData } = props;

  return (
    <>
      <div className="relative flex content-center items-center justify-center min-h-screen-50">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">Club news</h1>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-slate-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <section className="pb-20 bg-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-6/12 px-4 mx-auto flex flex-col gap-4">
              {postData.map((post) => (
                <article className="flex gap-2 flex-col" key={post.url}>
                  <h3 className="text-lg font-bold">{post.title}</h3>
                  <div className="text-xs flex justify-between items-center">
                    <span>
                      <i className="fa fa-calendar mr-1"></i>
                      {new Date(post.date).toDateString()}
                    </span>
                    <span>
                      <i className="fa fa-user mr-1"></i>
                      Author
                    </span>
                    <div className="text-xs font-semibold flex gap-2 items-center">
                      <span className=" inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white last:mr-0 mr-2 mt-2">
                        Event
                      </span>
                      <span className=" inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                        News
                      </span>
                    </div>
                  </div>
                  <p>{post.excerpt}</p>
                  <Link href={`/news${post.url}`}>
                    <a className="text-blue-600">Read more...</a>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = ({
  params,
  preview = false,
}) => {
  const postData = [
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      excerpt:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dolore veritatis earum, porro maiores cum. Ab earum est veniam quas, eaque neque nulla tempora dolorem autem reiciendis officiis cumque ullam.",
      date: new Date().getDate(),
      url: "/1",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      excerpt:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, dolorum sed amet quod cumque ratione quisquam id repellendus saepe. Fugit reiciendis ipsum id vero consequatur vitae autem nemo, mollitia, consectetur explicabo excepturi, sequi iusto unde pariatur nisi omnis velit aliquid?",
      date: new Date().getDate(),
      url: "/2",
    },
    {
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere!",
      excerpt:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eos error, amet unde quis, aspernatur dicta cum sit quia saepe architecto incidunt molestias consectetur culpa voluptates perferendis? Consectetur quod possimus optio sit saepe, libero minima.",
      date: new Date().getDate(),
      url: "/3",
    },
  ];

  return {
    props: {
      postData,
      preview,
    },
    revalidate: 10,
  };
};

News.options = {
  layout: Public,
};
