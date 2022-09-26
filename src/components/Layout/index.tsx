import { trpc } from '@/utils/trpc';
import RickCard from '../RickCard';

export default function Layout() {
  const hello = trpc.hello.useQuery({ text: 'Dylan' });
  if (!hello.data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-col p-6 w-screen'>
      <h2 className='font-bold text-2xl sm:text-5xl text-center pb-6'>
        Who is the most evil Rick?
      </h2>
      <p className='text-center p-12 text-lg last:'>{hello.data.greeting}</p>
      <div className='sm:flex mx-auto gap-6 text-center'>
        <RickCard />
        <h2 className='sm:flex sm:items-center'>OR</h2>
        <RickCard />
      </div>
    </div>
  );
}
