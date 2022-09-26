import RickCard from '../RickCard';

export default function Layout() {
  return (
    <div className='flex flex-col p-6'>
      <h2 className='font-bold text-5xl text-center pb-6'>
        Who is the most evil Rick?
      </h2>
      <RickCard />
    </div>
  );
}
