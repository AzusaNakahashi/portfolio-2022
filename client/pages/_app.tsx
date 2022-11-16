import { store } from "../store";
import { Provider } from "react-redux";
import Head from "next/head";
import type { AppPropsWithLayout } from "../types/layoutType";
import "../styles/base/normalize.css";

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
