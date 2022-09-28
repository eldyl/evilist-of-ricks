import { t } from '../trpc';
import { z } from 'zod';
import { prisma } from '@/server/utils/prisma';

export const voteRouter = t.router({
  submit: t.procedure
    .input(
      z.object({
        votedForEvil: z.number(),
        votedAgainstEvil: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      const voteInDb = await prisma.vote.create({
        data: {
          ...input,
        },
      });
      return { success: true, vote: voteInDb };
    }),
});

export type AppRouter = typeof voteRouter;
