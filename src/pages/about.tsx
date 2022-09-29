import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

const About: NextPage = () => {
  const voteForMostEvil = (selected: number) => {};

  return (
    <div className='p-6 w-screen'>
      <h2 className='font-bold text-xl sm:text-5xl text-center sm:pb-6'>
        About
      </h2>
      <div className='mx-auto py-6  bg-gray-300 rounded-lg max-w-xl'>
        <div className='px-6'>
          <h3 className='text-gray-700 font-medium text-2xl pb-3'>Hello!</h3>
          <ul className='list-disc pl-12 text-gray-700 font-medium'>
            <li>
              This was a quick project to get more practice with the
              <Link href={'https://github.com/t3-oss/create-t3-app'} passHref>
                <a className='text-violet-600 font-bold text-lgs'>
                  &nbsp;t3&nbsp;
                </a>
              </Link>
              stack.
            </li>
            <li>
              I followed parts of
              <Link
                href={'https://www.youtube.com/watch?v=PKy2lYEnhgs'}
                passHref
              >
                <a className='text-violet-600 font-bold text-lgs'>
                  &nbsp;Theo's tutorial video&nbsp;
                </a>
              </Link>
              where he makes
              <Link href={'https://roundest.t3.gg/'} passHref>
                <a className='text-violet-600 font-bold text-lgs'>
                  &nbsp;roundest-mon
                </a>
              </Link>
              .
            </li>
            <li>
              I was trying to find a decent topic to abstract the tutorial, when
              I happily stumbled upon the
              <Link href={'https://rickandmortyapi.com/'} passHref>
                <a className='text-violet-600 font-bold text-lgs'>
                  &nbsp;Rick and Morty API
                </a>
              </Link>
              .
            </li>
          </ul>
          {/* <div className='flex gap-4'> */}
          <div className='py-3 hover:scale-110 text-center'>
            <Link
              href='https://github.com/GetUllrichorDieTrying/evilist-of-ricks'
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
        </div>
      </div>
    </div>
    // </div>
  );
};

export default About;
