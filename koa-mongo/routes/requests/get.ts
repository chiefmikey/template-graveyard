import Router from '@koa/router';

import { findUser, findPost } from '../../db/queries/find';
import { processGet } from '../helpers/process';

const router = new Router({ prefix: '/get' });

router.get('/user', async (context) => {
  try {
    const shape = processGet(context.request.query.something);
    const results = await findUser(shape);
    context.response.status = 200;
    context.response.body = results;
  } catch (error) {
    console.error('error with get', error);
    context.response.status = 200;
  }
});

router.get('/post', async (context) => {
  try {
    const shape = processGet(context.request.query.something);
    const results = await findPost(shape);
    context.response.status = 200;
    context.response.body = results;
  } catch (error) {
    console.error('error with get', error);
    context.response.status = 200;
  }
});

export default router;
