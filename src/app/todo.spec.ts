import { Todo } from './todo';

describe('Todo', () => {
  it('必須有名稱、狀態', () => {
    const todo = new Todo('todo 1', false);

    expect(todo.name).toBe('todo 1');
    expect(todo.done).toBe(false);
  });

  it('狀態必須有預設值', () => {
    const todo = new Todo('todo 1');

    expect(todo.name).toBe('todo 1');
    expect(todo.done).toBe(false);
  })
});
