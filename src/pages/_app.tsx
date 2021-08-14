import Router from "next/router";
// import "../styles/styles.scss";
import withTwindApp from "@twind/next/shim/app";
import twindConfig from "../../tailwind.config";
import { AppProps } from "next/app";
import PageNProgress from "next-styled-nprogress";

import * as gtag from "../lib/gtag";

Router.events.on("routeChangeComplete", url => gtag.pageview(url));

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <PageNProgress color="#1463AC" showSpinner={false} height="2px" delay={200} />
      <Component {...pageProps} />
    </>
  );
};

export default withTwindApp(twindConfig, App);
