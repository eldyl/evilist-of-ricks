import '../styles/globals.css';
import type { AppProps } from 'next/app';
import type { AppType } from 'next/dist/shared/lib/utils';
import { trpc } from '@/utils/trpc';
import Header from '../components/Layout/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default trpc.withTRPC(MyApp);
