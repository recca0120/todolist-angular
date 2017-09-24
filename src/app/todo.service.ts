import {Injectable} from '@angular/core';
import {Todo} from './todo';
export enum TodoStatus {
  all,
  active,
  completed
}
;

@Injectable()
export class TodoService {
  items: Todo[] = [];

  constructor() {}

  put(todo: Todo): this {
    this.items.push(todo);

    return this;
  }

  get(status: TodoStatus = TodoStatus.all): Todo[] {
    return this.items.filter((item) => {
      switch (status) {
        case TodoStatus.active:
          return item.done === false;
        case TodoStatus.completed:
          return item.done === true;
        default:
          return true;
      }
    });
  }

  remove(todo: Todo): void {
    this.items = this.items.filter((item) => {
      return item !== todo;
    });
  }

  removeCompleted() {
    this.items = this.items.filter((item) => {
      return item.done !== true;
    });
  }
}
