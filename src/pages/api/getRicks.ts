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
    let packagedDataToSend = [];

    let results = await axios.get(
      'https://rickandmortyapi.com/api/character/?name=rick',
    );

    for (let i = 1; i < results.data.info.pages + 1; i++) {
      let pageXResults = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${[i]}&name=rick`,
      );
      packagedDataToSend.push(...pageXResults.data.results);
    }

    res.status(200).send(packagedDataToSend);
  } catch (error) {
    console.error(error);
  }
}
