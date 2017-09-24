import {inject, TestBed} from '@angular/core/testing';

import {Todo} from './todo';
import {TodoService, TodoStatus} from './todo.service';

describe('TodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [TodoService]});
  });

  it('必須存入 Todo 並計算個數',
     inject([TodoService], (service: TodoService) => {
       service.put(new Todo('task 1'))
           .put(new Todo('task 2'))
           .put(new Todo('task 3'));

       expect(service.items.length).toBe(3);
     }));

  it('必須存入 Todo 並計算個數 new TodoService', () => {
    const service = new TodoService()
                        .put(new Todo('task 1'))
                        .put(new Todo('task 2'))
                        .put(new Todo('task 3'));

    expect(service.items.length).toBe(3);
  });

  it('可以飾選 task', () => {
    const service = new TodoService()
                        .put(new Todo('task 1'))
                        .put(new Todo('task 2', true))
                        .put(new Todo('task 3'));

    expect(service.get().length).toBe(3)
    expect(service.get(TodoStatus.completed).length).toBe(1)
    expect(service.get(TodoStatus.active).length).toBe(2)
  });

  it('刪除 Todo', () => {
    const todo = new Todo('task 1');
    const service = new TodoService()
                        .put(todo)
                        .put(new Todo('task 2', true))
                        .put(new Todo('task 3'));

    service.remove(todo);

    expect(service.get().length).toBe(2)
  });

  it('清除完成的 Todo', () => {
    const service = new TodoService()
                        .put(new Todo('task 1'))
                        .put(new Todo('task 2', true))
                        .put(new Todo('task 3'));

    service.removeCompleted();

    expect(service.get().length).toBe(2)
  });

  it('新增 Todo',
     () => {

     })
});
