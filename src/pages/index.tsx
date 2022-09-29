import type { NextPage } from 'next';
import { trpc } from '@/utils/trpc';
import { useState, useEffect } from 'react';
import { getOptionsForVote } from '@/utils/getRandomRick';
import RickCard from '@/components/RickCard';
import LoadingRickCard from '@/components/RickCard/LoadingCard';

const Home: NextPage = () => {
  const [ids, setIds] = useState(() => getOptionsForVote());
  const [firstIndex, secondIndex] = ids;
  const [pageLoaded, setPageLoaded] = useState(false);
  const rick = trpc.ricks.get.useQuery();
  const voteMutation = trpc.vote.submit.useMutation();
  // const fillDB = trpc.fillDb.fill.useMutation();

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  const rickArray = rick.data;
  if (!rickArray) {
    return <div>Loading...</div>;
  }

  // useEffect(() => {
  //   for (let i = 0; i < rickArray.length; i++) {
  //     fillDB.mutate({
  //       id: rickArray[i].id,
  //       name: rickArray[i].name,
  //       image: rickArray[i].image,
  //     });
  //   }
  // });
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
      <div className='flex flex-col p-6 w-screen'>
        <h2 className='font-bold text-xl sm:text-5xl text-center sm:pb-6'>
          Who is the most evil Rick?
        </h2>
        <div className='sm:flex mx-auto p-6 gap-6 text-center sm:min-h-[475px] font-bold sm:mb-0 mb-12'>
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
