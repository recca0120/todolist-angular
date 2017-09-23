import { Component } from '@angular/core';
import { Task } from './task';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    tasks: Task[] = [];
    filter = 'all';
    selected: Task;

    filterFn = (task: Task) => {
        if (this.filter === 'all') {
            return true;
        }

        return this.filter === 'active' ? !task.done : task.done;
    }

    constructor(private todoService: TodoService)  {
        this.getTasks();
    }

    create(input: HTMLInputElement) {
        if (!input.value) {
            return;
        }
        this.todoService.put(new Task(input.value));
        input.value = ''
        ;
        this.getTasks();
    }

    select (task: Task) {
        console.log(task)
        this.selected = task;
    }

    unselect() {
        this.selected = null;
    }

    toggleDone(task: Task) {
        task.done = !task.done;

        this.getTasks();
    }

    toggleFilter(filter: string) {
        this.filter = filter;

        this.getTasks();
    }

    private getTasks() {
        this.tasks = this.todoService.filter(this.filterFn);
    }
}
