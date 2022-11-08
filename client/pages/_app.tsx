import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import MainLayout from "../layout/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../store";
import { Provider } from "react-redux";
import Head from "next/head";

/*
type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType;
  };
};*/

/*
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};*/

export type NextPageWithLayout = NextPage & { layout: typeof MainLayout };

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: any;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.layout ?? ((children) => children);
  return (
    <Provider store={store}>
      <Head>
        <title>Azusa Nakahashi</title>
        <meta
          name="description"
          content="Front-end developer Azusa Nakahashi portfolio website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
