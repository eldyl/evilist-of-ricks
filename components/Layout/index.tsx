import RickCard from '../RickCard';

export default function Layout() {
  return (
    <div className='flex flex-col p-6 w-screen'>
      <h2 className='font-bold text-2xl sm:text-5xl text-center pb-6'>
        Who is the most evil Rick?
      </h2>
      <div className='sm:flex mx-auto gap-6 text-center'>
        <RickCard />
        <h2 className='sm:flex sm:items-center'>OR</h2>
        <RickCard />
      </div>
    </div>
  );
}
