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

  let results = ricks.map((rick) => {
    return (
      <div
        key={rick.id}
        className='flex flex-col bg-neutral-300 gap-3 text-center text-gray-600 rounded-lg shadow-lg p-6'
      >
        <Image
          src={rick.image}
          alt={rick.name}
          width={250}
          height={250}
          className='rounded-lg'
        />
        <h3 className=' text-xl text font-medium'>{rick.name}</h3>
        <button className='p-3 bg-neutral-400 rounded-md font-bold text-black'>
          PURE EVIL
        </button>
      </div>
    );
  });

  return (
    <div className='flex flex-col gap-6 mx-auto'>{results}</div>
    // <div>
    //   <image />
    //   <h3></h3>
    //   <button></button>
    // </div>
  );
}
