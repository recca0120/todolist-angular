import {Component, OnInit} from '@angular/core';

import {Todo} from './todo';
import {TodoService, TodoStatus} from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  todoStatus = TodoStatus;
  todoList: Todo[] = [];
  todoListfilter = null;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.put(new Todo('1'));
    this.todoService.put(new Todo('2'));
    this.todoService.put(new Todo('3', true));
    this.todoService.put(new Todo('4'));
    this.todoList = this.todoService.get();
  }

  create(input: HTMLInputElement) {
    if (input.value === '') {
      return
    }

    this.todoService.put(new Todo(input.value));
    this.todoList = this.todoService.get();
    input.value = '';
  }

  remove(todo: Todo) {
    this.todoService.remove(todo);
    this.todoList = this.todoService.get();
  }

  filter(todoListfilter: TodoStatus) {
    this.todoList = this.todoService.get(todoListfilter);
  }

  removeCompleted() {
    this.todoService.removeCompleted();
    this.todoList = this.todoService.get();
  }
}
