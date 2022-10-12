import '../styles/globals.css';
import type { AppType } from 'next/dist/shared/lib/utils';
import { trpc } from '@/utils/trpc';
import PlausibleProvider from 'next-plausible';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <PlausibleProvider domain='evilist-of-ricks.gudt.io'>
      <div className='flex flex-col h-screen'>
        <Header />
        <div className='grow'>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </PlausibleProvider>
  );
};

export default trpc.withTRPC(MyApp);
