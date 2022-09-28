// I am leaving this as an "in-project" example to reference

import { t } from '../trpc';
import { z } from 'zod';

export const helloRouter = t.router({
  user: t.procedure
    .input(
      z
        .object({
          text: z.string().nullish(),
        })
        .nullish(),
    )
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? 'world'}!`,
      };
    }),
});
export type AppRouter = typeof helloRouter;
