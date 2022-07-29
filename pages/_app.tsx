import type { AppProps } from "next/app";
import "../styles/globals.scss";
import Nav from "../components/Nav";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav /> <Component {...pageProps} />
    </>
  );
}

export default MyApp;
