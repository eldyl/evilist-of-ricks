import LoadingRickCard from '../RickCard/LoadingCard';

export default function VoteLoadState() {
  return (
    <div className='flex flex-col w-screen'>
      <h2 className='font-bold text-xl sm:text-5xl text-center p-6'>
        Who is the most evil Rick?
      </h2>
      <div className='sm:flex mx-auto gap-6 text-center sm:min-h-[475px] font-bold'>
        <LoadingRickCard />

        <h3 className='sm:flex sm:items-center'>OR</h3>

        <LoadingRickCard />
      </div>
    </div>
  );
}
