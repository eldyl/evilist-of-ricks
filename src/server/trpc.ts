import { Context } from './context';
import { initTRPC } from '@trpc/server';

export const t = initTRPC.context<Context>().create({
  errorFormatter({ shape }) {
    return shape;
  },
});
