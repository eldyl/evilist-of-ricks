import type { NextPage } from 'next';
import { trpc } from '@/utils/trpc';
import { useState, useEffect } from 'react';
import { getOptionsForVote } from '@/utils/getRandomRick';
import RickCard from '@/components/RickCard';
import LoadingRickCard from '@/components/RickCard/LoadingCard';
import VoteLoadState from '@/components/VoteLoadState';

const Home: NextPage = () => {
  const [ids, setIds] = useState(() => getOptionsForVote());
  const [firstIndex, secondIndex] = ids;
  const [pageLoaded, setPageLoaded] = useState(false);
  const rick = trpc.ricks.get.useQuery();
  const voteMutation = trpc.vote.submit.useMutation();

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  const rickArray = rick.data;
  if (!rickArray) {
    return <VoteLoadState />;
  }

  const voteForMostEvil = (selected: number) => {
    if (selected === rickArray[firstIndex].id) {
      voteMutation.mutate({
        votedForEvil: rickArray[firstIndex].id,
        votedAgainstEvil: rickArray[secondIndex].id,
      });
    } else {
      voteMutation.mutate({
        votedForEvil: rickArray[secondIndex].id,
        votedAgainstEvil: rickArray[firstIndex].id,
      });
    }
    setIds(getOptionsForVote());
  };

  return (
    <>
      <div className='flex flex-col w-screen pb-6 px-3'>
        <h2 className='font-bold text-xl sm:text-5xl text-center p-3 sm:p-6'>
          Who is the most evil Rick?
        </h2>
        <div className='sm:flex mx-auto gap-6 text-center sm:min-h-[475px] font-bold'>
          {pageLoaded ? (
            <RickCard
              {...rickArray[firstIndex]}
              voteForMostEvil={voteForMostEvil}
            />
          ) : (
            <LoadingRickCard />
          )}
          <h3 className='sm:flex sm:items-center'>OR</h3>
          {pageLoaded ? (
            <RickCard
              {...rickArray[secondIndex]}
              voteForMostEvil={voteForMostEvil}
            />
          ) : (
            <LoadingRickCard />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
