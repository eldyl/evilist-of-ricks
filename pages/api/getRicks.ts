import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// type Data = {
//   name: string;
// };

export default async function getRicks(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    let results = await axios.get(
      'https://rickandmortyapi.com/api/character?name=rick',
    );

    res.status(200).send(results.data);
  } catch (error) {
    console.error(error);
  }
}
