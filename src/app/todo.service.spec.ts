import { TestBed, inject } from '@angular/core/testing';

import { Task } from './task';
import { TodoService } from './todo.service';

describe('TodoService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TodoService]
        });
    });

    it('新增 Task', inject([TodoService], (service: TodoService) => {
        const task = new Task('task1');
        service.put(task);

        expect(service.all()).toEqual([task]);

        const task2 = new Task('task2');
        service.put(task2);

        expect(service.all()).toEqual([task, task2]);
    }));

    it('計算 Task 個數', inject([TodoService], (service: TodoService) => {
        const task = new Task('task1');
        const task2 = new Task('task2');
        service.put(task).put(task2);

        expect(service.count()).toBe(2);
    }));
});
