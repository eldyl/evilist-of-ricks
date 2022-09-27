import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// type Data = {
//   name: string;
// };

interface Rick {
  id: number;
  name: string;
  image: string;
}

export default async function getRicks(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    let ricks: Rick[] = [];

    for (let i = 1; i < 7; i++) {
      let results = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${[i]}&name=rick`,
      );
      ricks.push(...results.data.results);
    }

    res.status(200).send(ricks);
  } catch (error) {
    console.error(error);
  }
}
