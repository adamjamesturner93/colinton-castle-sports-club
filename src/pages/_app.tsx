import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/index.css";
import { Router } from "next/router";

type PageOptions = {
  layout?: () => JSX.Element;
};

type PageProps = {
  router: Router;
};

interface Page<P extends object = Record<string, unknown>> {
  (props: PageProps & P): React.ReactElement;
  options?: PageOptions;
}

type Props = AppProps & {
  Component: Page;
};

const App = ({ Component: Page, pageProps, router }: Props) => {
  const options: PageOptions = Page.options ?? {};

  console.log(options);

  const Layout = options.layout || (({ children }) => <>{children}</>);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Colinton Castle Sport Club | Squash and Racketball</title>
        {/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script> */}
      </Head>
      <Layout>
        <Page {...pageProps} />
      </Layout>
    </React.Fragment>
  );
};

export default App;
