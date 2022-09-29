import { prisma } from '@/server/utils/prisma';
import axios from 'axios';

// const axios = require('axios');

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
  let rickArray = ricks.map((rick) => {
    return {
      id: rick.id,
      name: rick.name,
      image: rick.image,
    };
  });
  console.log(rickArray);

  return rickArray;

  // const fillDbWithRicks = await prisma.rick.createMany({
  //   data: {
  //     id: rickArray.id,
  //     name: input.name,
  //     image: input.image,
  //   },
  // });
  // return { success: true, fillDb: fillDbWithRicks };
  // console.log({ fillDbWithRicks });
}

doBackFill();
