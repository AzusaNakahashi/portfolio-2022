import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

// when there is layout, apply layout
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
