import { wrapper } from "../store";
import { Provider } from "react-redux";
import Head from "next/head";
import type { AppPropsWithLayout } from "../types/layoutType";
import "../styles/global.scss";

function MyApp({ Component, ...rest }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
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
