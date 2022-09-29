import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

const About: NextPage = () => {
  const voteForMostEvil = (selected: number) => {};

  return (
    <div className='sm:pb-72'>
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
                  &nbsp; Theo`s tutorial video &nbsp;
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
            <li>
              The Evilist of Ricks repository can be viewed
              <Link
                href={
                  'https://github.com/GetUllrichorDieTrying/evilist-of-ricks/'
                }
                passHref
              >
                <a className='text-violet-600 font-bold text-lgs'>&nbsp;here</a>
              </Link>
              .
            </li>
            <li className=' font-extrabold'>
              Most importantly, we are here to determine the Most Evil Rick of
              them all... according to the Internet!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
