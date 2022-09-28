import type { NextPage } from 'next';
import { trpc } from '@/utils/trpc';
import { useState, useEffect } from 'react';
import { getOptionsForVote } from '@/utils/getRandomRick';
import RickCard from '@/components/RickCard';
import LoadingRickCard from '@/components/RickCard/LoadingCard';

const Home: NextPage = () => {
  const [ids, setIds] = useState(getOptionsForVote());
  const [firstIndex, secondIndex] = ids;
  const [pageLoaded, setPageLoaded] = useState(false);
  const rick = trpc.ricks.get.useQuery();

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  const rickArray = rick.data?.ricks;
  if (!rickArray) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='flex flex-col p-6 w-screen'>
        <h2 className='font-bold text-xl sm:text-5xl text-center sm:pb-6'>
          Who is the most evil Rick?
        </h2>
        <div className='sm:flex mx-auto p-6 gap-6 text-center sm:min-h-[475px] font-bold sm:mb-0 mb-12'>
          {pageLoaded ? (
            <RickCard {...rickArray[firstIndex]} />
          ) : (
            <LoadingRickCard />
          )}
          <h3 className='sm:flex sm:items-center'>OR</h3>
          {pageLoaded ? (
            <RickCard {...rickArray[secondIndex]} />
          ) : (
            <LoadingRickCard />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
