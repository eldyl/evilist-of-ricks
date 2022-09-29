import LoadingRickCard from '../RickCard/LoadingCard';

export default function VoteLoadState() {
  return (
    <div className='flex flex-col p-6 w-screen'>
      <h2 className='font-bold text-xl sm:text-5xl text-center sm:pb-6'>
        Who is the most evil Rick?
      </h2>
      <div className='sm:flex mx-auto p-6 gap-6 text-center sm:min-h-[475px] font-bold sm:mb-0 mb-12'>
        <LoadingRickCard />

        <h3 className='sm:flex sm:items-center'>OR</h3>

        <LoadingRickCard />
      </div>
    </div>
  );
}
