import { t } from '../trpc';
import axios from 'axios';
import { prisma } from '@/server/utils/prisma';

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

  results: t.procedure.query(async ({ ctx }) => {
    const ricksFromPrisma = await prisma.rick.findMany({
      orderBy: {
        votedEvil: { _count: 'desc' },
      },
      select: {
        id: true,
        name: true,
        image: true,
        _count: {
          select: {
            votedEvil: true,
            votedNotEvil: true,
          },
        },
      },
    });

    const calculatedResults = ricksFromPrisma.map((rick) => {
      const { votedEvil, votedNotEvil } = rick._count;

      return {
        id: rick.id,
        name: rick.name,
        image: rick.image,
        _count: {
          votedEvil: votedEvil,
          votedNotEvil: votedNotEvil,
        },
        totalVoteCount: votedEvil + votedNotEvil,
        percentForEvil: (votedEvil / (votedEvil + votedNotEvil)) * 100 || 0,
      };
    });

    const sortedResults = calculatedResults.sort(
      (a, b) => b.percentForEvil - a.percentForEvil,
    );

    const indexedResults = sortedResults.map((rick, index) => {
      return {
        id: rick.id,
        name: rick.name,
        image: rick.image,
        _count: {
          votedEvil: rick._count.votedEvil,
          votedNotEvil: rick._count.votedNotEvil,
        },
        totalVoteCount: rick._count.votedEvil + rick._count.votedNotEvil,
        percentForEvil:
          (rick._count.votedEvil /
            (rick._count.votedEvil + rick._count.votedNotEvil)) *
            100 || 0,
        rank: index + 1,
      };
    });

    return indexedResults;
  }),
});

export type AppRouter = typeof rickRouter;
