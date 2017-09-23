import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {

  items: Todo[] = [];

  constructor() { }

  put(todo: Todo): this {
    this.items.push(todo);

    return this;
  }

  get(done?: boolean): Todo[] {
    return this.items.filter((item) => {
      if (done === undefined) {
        return true;
      }

      return item.done === done;
    });
  }

  getAll(): Todo[] {
    return this.get();
  }

  getActive(): Todo[] {
    return this.get(false);
  }

  getCompleted(): Todo[] {
    return this.get(true);
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
