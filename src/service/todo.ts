import { Container } from 'typedi';
import { Todo } from '../entity/todo';
import { TodoRepository } from '../repository/todo';

export const getTodos = () => {
  const repo = Container.get(TodoRepository);

  return repo.findAll();
};

export const createTodo = (payload: any) => {
  const todo = new Todo();

  const repo = Container.get(TodoRepository);
  todo.title = payload.title;
  todo.description = payload.description;
  todo.isCompleted = payload.isCompleted;
  return repo.save(todo);
};
