import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class TodoService {

    tasks: Task[] = [];

    constructor() { }

    put(task: Task): this {
        this.tasks.push(task);

        return this;
    }

    all(): Task[] {
        return this.tasks;
    }

    filter(fn): Task[] {
        return this.tasks.filter(fn);
    }

    count(): number {
        return this.tasks.length;
    }
}
