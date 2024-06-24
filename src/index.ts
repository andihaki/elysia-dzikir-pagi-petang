import { Elysia, t } from 'elysia';

import DZIKIR_PAGI_PETANG from './constants/dzikir';
import { dzikirModel } from './models/dzikir';

/**
 * elysia note:
 * params ga bisa optional
 * -- query ga bisa fixed string
 */
const app = new Elysia()
  .use(dzikirModel)
  .get('/', ({ redirect }) => redirect('/dzikir'))
  .get(
    '/dzikir',
    ({ query }) => {
      const mode = query.mode ? ` ${query.mode}` : '';
      if (/^ (evening|morning)$/i.test(mode)) {
        return DZIKIR_PAGI_PETANG.filter(({ readOn }) => mode.includes(readOn) || readOn === 'both');
      }
      return DZIKIR_PAGI_PETANG;
    },
    {
      query: 'dzikir',
    },
  )
  .listen(3000);

console.log(`🦊 Elysia on ${app.server?.hostname}:${app.server?.port}`);
