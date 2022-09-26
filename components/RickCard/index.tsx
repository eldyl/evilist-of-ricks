import axios from 'axios';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Rick {
  id: number;
  name: string;
  image: string;
}

export default function RickCard() {
  const [ricks, setRicks] = useState<Rick[]>([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get('/api/getRicks');
      setRicks(res.data.results);
    }
    getData();
  }, []);

  return (
    <div className='mx-auto'>
      <div className='flex flex-col bg-neutral-300 gap-3 text-center text-gray-600 rounded-lg shadow-lg p-6'>
        <Image
          src={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
          alt={'Rick'}
          width={250}
          height={250}
          className='rounded-lg'
        />
        <h3 className=' text-xl text font-medium'>{'Rick Sanchez'}</h3>
        <button className='p-3 bg-neutral-400 rounded-md font-bold text-black'>
          PURE EVIL
        </button>
      </div>
    </div>
  );
}
