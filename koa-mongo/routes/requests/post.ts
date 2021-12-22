import Router from '@koa/router';

import { saveUser, savePost } from '../../db/queries/save';
import { processPost } from '../helpers/process';

const router = new Router({ prefix: '/post' });

router.post('/user', async (context) => {
  try {
    const shape = processPost(context.request.query.something);
    const results = await saveUser(shape);
    context.response.status = 200;
    context.response.body = results;
  } catch (error) {
    console.error('error with post', error);
    context.response.status = 200;
  }
});

router.post('/post', async (context) => {
  try {
    const shape = processPost(context.request.query.something);
    const results = await savePost(shape);
    context.response.status = 200;
    context.response.body = results;
  } catch (error) {
    console.error('error with post', error);
    context.response.status = 200;
  }
});

export default router;
