import '../styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import type { AppType } from 'next/dist/shared/lib/utils';
import { trpc } from '@/utils/trpc';
import PlausibleProvider from 'next-plausible';
import Head from 'next/head';
interface Navigation {
  name: string;
  href: string;
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Results', href: '/results' },
];

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <PlausibleProvider domain='evilist-of-ricks.gudt.io'>
      <Head>
        <title>Evilist of Ricks</title>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
        />
      </Head>
      <div className='flex flex-col h-screen'>
        <header className='bg-slate-800'>
          <nav
            className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 sm:py-3'
            aria-label='Top'
          >
            <div className='flex w-full items-center justify-between border-b border-teal-500 py-3 lg:border-none'>
              <div className='flex items-center'>
                <Link
                  href='/'
                  passHref
                >
                  <a>
                    <h1 className='text-[#42b4ca] text-xl font-bold underline decoration-[#bfde42] underline-offset-4'>
                      Evilist of Ricks
                    </h1>
                  </a>
                </Link>
              </div>
              <div className='ml-10 space-x-4'>
                <div className='ml-10 hidden space-x-8 lg:block'>
                  {navigation.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      passHref
                    >
                      <a className='text-base font-medium text-gray-400 hover:text-gray-100'>
                        {link.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className='flex flex-wrap justify-center space-x-6 py-3 lg:hidden'>
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  passHref
                >
                  <a className='text-base font-medium text-gray-400 hover:text-gray-100'>
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
          </nav>
        </header>
        <div className='grow'>
          <Component {...pageProps} />
        </div>
        <footer className='bg-slate-800'>
          <div className='p-2'>
            <p className='text-center text-base text-gray-400'>
              &copy; 2022 Get Ullrich or Die Trying
            </p>
          </div>
          <div className='pb-2 text-center'>
            <Link
              href='https://github.com/dylanullrich/'
              passHref
            >
              <a>
                <Image
                  src='/images/GitHub-Mark-120px-plus.png'
                  alt='link to github'
                  width={32}
                  height={32}
                />
              </a>
            </Link>
          </div>
        </footer>
      </div>
    </PlausibleProvider>
  );
};

export default trpc.withTRPC(MyApp);
