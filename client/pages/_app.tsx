import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Azusa Nakahashi</title>
          <meta
            name="description"
            content="Front-end developer Azusa Nakahashi portfolio website"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
