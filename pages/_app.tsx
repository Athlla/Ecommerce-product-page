import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ecommerce Product Page</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
