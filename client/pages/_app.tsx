import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import '../src/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
