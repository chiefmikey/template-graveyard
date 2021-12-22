import Koa from 'koa';
import serve from 'koa-static';
import path from 'node:path';

const port = 3000;

const app = new Koa();

app
  .use(serve(path.join(path.resolve(), 'client/public')))
  .listen(port, () =>
    console.log(`Koa is listening at http://localhost:${port}`),
  );

export default app;
