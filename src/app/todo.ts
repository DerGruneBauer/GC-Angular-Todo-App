export class Todo {
    task: string = "";
    completed: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
