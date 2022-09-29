import { prisma } from '../src/server/utils/prisma';
import axios from 'axios';

interface Rick {
  id: number;
  name: string;
  image: string;
}

async function doBackFill() {
  let ricks: Rick[] = [];

  for (let i = 1; i < 7; i++) {
    let results = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${[i]}&name=rick`,
    );
    ricks.push(...results.data.results);
  }

  let formattedRickData = ricks.map((rick) => {
    return {
      id: rick.id,
      name: rick.name,
      image: rick.image,
    };
  });

  const fillDbWithRicks = await prisma.rick.createMany({
    data: formattedRickData,
  });
  console.log({ fillDbWithRicks });
  return { success: true, fillDb: fillDbWithRicks };
}

doBackFill();
