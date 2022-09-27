import { t } from '../trpc';
import { helloRouter } from './hello';
import { rickRouter } from './ricks';

export const appRouter = t.router({
  hello: helloRouter,
  ricks: rickRouter,
});
