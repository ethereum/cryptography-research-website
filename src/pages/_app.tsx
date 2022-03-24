import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Layout } from '../components';

import '../styles/globals.css';
import 'katex/dist/katex.min.css'; // `rehype-katex` does not import the CSS for you
import 'focus-visible/dist/focus-visible';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* <link rel='icon' type='image/x-icon' href={favicon.src} />
        <link rel='icon' type='image/png' sizes='32x32' href={favicon32.src} />
        <link rel='icon' type='image/png' sizes='16x16' href={favicon16.src} /> */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
