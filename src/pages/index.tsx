import type { NextPage } from 'next';
import { trpc } from '@/utils/trpc';
import { useEffect, useState } from 'react';
import { getOptionsForVote } from '@/utils/getRandomRick';
import RickCard from '@/components/RickCard';
import axios from 'axios';

interface Rick {
  id: number;
  name: string;
  image: string;
}

const Home: NextPage = () => {
  const [ricks, setRicks] = useState<Rick[]>([]);
  const [ids, setIds] = useState(getOptionsForVote());
  const [firstIndex, secondIndex] = ids;

  useEffect(() => {
    async function getData() {
      const res = await axios.get('/api/getRicks');
      setRicks(res.data);
    }
    getData();
  }, []);

  const hello = trpc.hello.user.useQuery({ text: 'Visitor' });
  if (!hello.data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='flex flex-col p-6 w-screen'>
        <p className='text-center font-bold text-xl'>{hello.data.greeting}</p>
        <h2 className='font-bold text-2xl sm:text-5xl text-center pb-6'>
          Who is the most evil Rick?
        </h2>
        <div className='sm:flex mx-auto gap-6 text-center'>
          <RickCard {...ricks[firstIndex]} />
          <h3 className='sm:flex sm:items-center'>OR</h3>
          <RickCard {...ricks[secondIndex]} />
        </div>
      </div>
    </>
  );
};

export default Home;
