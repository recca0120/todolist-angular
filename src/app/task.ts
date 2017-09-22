export class Task {
    name: string;
    date: Date;
    done: boolean;
    deleted: boolean;

    constructor(name: string, date: Date = new Date, done: boolean = false, deleted: boolean = false) {
        this.name = name;
        this.date = date;
        this.done = done;
        this.deleted = deleted;
    }
}
