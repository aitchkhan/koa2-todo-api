import { Context } from 'koa';
import { createTodo, getTodos  } from '../service/todo';

export const get = async (ctx: Context) => {
  ctx.body = { todo: await getTodos(), time: Date.now() };
};

export const post = async (ctx: Context) => {
  const payload = { ...ctx.request.body };
  ctx.body = { todo: await createTodo(payload) };
};

export const put = (ctx: Context) => {
  ctx.body = '[PUT] books';
};
