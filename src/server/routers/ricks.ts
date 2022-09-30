import { t } from '../trpc';
import axios from 'axios';

interface Rick {
  id: number;
  name: string;
  image: string;
}

export const rickRouter = t.router({
  get: t.procedure.query(async ({ ctx }) => {
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

    return rickArray;
  }),
});

export type AppRouter = typeof rickRouter;
