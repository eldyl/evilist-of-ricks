import { t } from '../trpc';
import { rickRouter } from './ricks';
import { voteRouter } from './vote';

export const appRouter = t.router({
  ricks: rickRouter,
  vote: voteRouter,
});
