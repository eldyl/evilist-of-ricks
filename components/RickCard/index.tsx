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
      const res = await axios.get(
        'https://rickandmortyapi.com/api/character?name=rick',
      );
      setRicks(res.data.results);
    }
    getData();
  }, []);

  let results = ricks.map((rick) => {
    return (
      <Image
        src={rick.image}
        key={rick.id}
        alt={rick.name}
        width={250}
        height={250}
      />
    );
  });

  return <div>{results}</div>;
}
