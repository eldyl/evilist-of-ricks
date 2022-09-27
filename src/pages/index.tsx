import type { NextPage } from 'next';
// import { trpc } from '@/utils/trpc';
import { useEffect, useState } from 'react';
import { getOptionsForVote } from '@/utils/getRandomRick';
import RickCard from '@/components/RickCard';
import axios from 'axios';

interface Rick {
  id: number;
  name: string;
  image: string;
}

interface RickProps {
  ricks: Rick[];
}

const Home: NextPage<RickProps> = (ricks: RickProps) => {
  const rickData = ricks.ricks;
  const [hydrated, setHydrated] = useState(false);
  const [ids, setIds] = useState(getOptionsForVote());
  const [firstIndex, secondIndex] = ids;

  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return (
    <>
      <div className='flex flex-col p-6 w-screen'>
        {/* <p className='text-center font-bold text-xl'>{hello.data.greeting}</p> */}
        <h2 className='font-bold text-2xl sm:text-5xl text-center pb-6'>
          Who is the most evil Rick?
        </h2>
        <div className='sm:flex mx-auto gap-6 text-center'>
          <RickCard {...rickData[firstIndex]} />
          <h3 className='sm:flex sm:items-center'>OR</h3>
          <RickCard {...rickData[secondIndex]} />
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  // const hello = trpc.hello.useQuery({ text: 'Visitor' });
  // if (!hello.data) {
  //   return <div>Loading...</div>;
  // }

  let ricks: Rick[] = [];

  for (let i = 1; i < 7; i++) {
    let results = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${[i]}&name=rick`,
    );
    ricks.push(...results.data.results);
  }

  return {
    props: { ricks }, // will be passed to the page component as props
  };
}

export default Home;
