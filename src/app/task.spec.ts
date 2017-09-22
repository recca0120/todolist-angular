import { Task } from './task';

describe('Task', () => {
    it('必須有名稱、日期、完成、刪除', () => {
        const name = 'task';
        const date = new Date;
        const done = false;
        const deleted = false;

        const task = new Task(name, date, done, deleted);

        expect(task.name).toBe(name);
        expect(task.date).toBe(date);
        expect(task.done).toBe(done);
        expect(task.deleted).toBe(deleted);
    });

    it('日期、完成、刪除 給預設值', () => {
        const name = 'task';
        const date = new Date;
        const done = false;
        const deleted = false;

        const task = new Task(name);

        expect(task.name).toBe(name);
        expect(task.date instanceof Date).toBeTruthy();
        expect(task.done).toBe(done);
        expect(task.deleted).toBe(deleted);
    });
});
