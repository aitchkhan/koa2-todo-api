import { methodNotAllowed, notImplemented } from 'boom';
import * as compose from 'koa-compose';
import * as Router from 'koa-router';

import * as Ctrl from '../controller/todo';

const router = new Router({
  prefix: '/todos',
});

router.get('/', Ctrl.get);
router.post('/', Ctrl.post);
router.put('/', Ctrl.put);

const routes = router.routes();
const allowedMethods = router.allowedMethods({
  methodNotAllowed: () => methodNotAllowed(),
  notImplemented: () => notImplemented(),
  throw: true,
});

export default () => compose([
  routes,
  allowedMethods,
]);
