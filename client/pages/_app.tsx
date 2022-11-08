import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { store } from "../store";
import { Provider } from "react-redux";
import Head from "next/head";
import "../styles/globals.css";

// when there is layout, apply layout
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <Provider store={store}>
      <Head>
        <title>Azusa Nakahashi Portfolio</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  );
}
export default MyApp;
