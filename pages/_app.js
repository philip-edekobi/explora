import '../styles/globals.css';

import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';

import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  Router.events.on('routeChangeStart', () => {NProgress.start()});
  Router.events.on('routeChangeComplete', () => {NProgress.done()});

  return (
    <>
      <Head>
        <title>Explora</title>
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp
