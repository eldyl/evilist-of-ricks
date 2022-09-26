import { trpc } from '@/utils/trpc';
import axios from 'axios';
import { useState, useEffect } from 'react';
import RickCard from '../RickCard';

interface Rick {
  id: number;
  name: string;
  image: string;
}

export default function Layout() {
  const [ricks, setRicks] = useState<Rick[]>([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get('/api/getRicks');
      setRicks(res.data);
    }
    getData();
  }, []);

  console.log(ricks);

  return (
    <div className='flex flex-col p-6 w-screen'>
      <h2 className='font-bold text-2xl sm:text-5xl text-center pb-6'>
        Who is the most evil Rick?
      </h2>
      <div className='sm:flex mx-auto gap-6 text-center'>
        <RickCard {...ricks[34]} />
        <h2 className='sm:flex sm:items-center'>OR</h2>
        <RickCard {...ricks[77]} />
      </div>
    </div>
  );
}
