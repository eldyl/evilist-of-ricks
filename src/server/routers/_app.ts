import { t } from '../trpc';
// import { fillDbRouter } from './fillDb';
import { helloRouter } from './hello';
import { rickRouter } from './ricks';
import { voteRouter } from './vote';

export const appRouter = t.router({
  hello: helloRouter,
  ricks: rickRouter,
  vote: voteRouter,
});
