import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todos: Todo[] = [];

  getAllTodos(): Todo[] {
    return this.todos;
  }

   isComplete(todo: Todo){
     todo.completed = true;
   }


   addTodo(todo: Todo): TodoComponent {
    this.todos.push(todo);
    return this;
  }

  get todo() {
    return this.todo;
  }
}
