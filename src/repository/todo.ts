import { Service } from 'typedi';
import { EntityManager, Repository } from 'typeorm';
import {  OrmManager, OrmRepository } from 'typeorm-typedi-extensions';

import { Todo } from '../entity/todo';

@Service()
export class TodoRepository {
  @OrmManager()
  private entityManager: EntityManager;

  constructor(@OrmRepository(Todo) private ormRepository: Repository<Todo>) { }

  public save(todo: Todo) {
    return this.ormRepository.save(todo);
  }

  public findAll() {
    return this.ormRepository.find();
  }
}
