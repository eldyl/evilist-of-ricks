import '../styles/globals.css';
import type { AppType } from 'next/dist/shared/lib/utils';
import { trpc } from '@/utils/trpc';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default trpc.withTRPC(MyApp);
