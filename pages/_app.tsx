import type { AppProps } from "next/app";
import "../styles/globals.scss";
import Nav from "../components/Nav";
import Head from "next/head";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav /> <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
