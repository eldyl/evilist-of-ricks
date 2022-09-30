import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='bg-slate-800'>
      <div className='p-2'>
        <p className='text-center text-base text-gray-400'>
          &copy; 2022 Get Ullrich or Die Trying
        </p>
      </div>
      <div className='pb-2 text-center'>
        <Link href='https://github.com/GetUllrichorDieTrying/' passHref>
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
  );
}
