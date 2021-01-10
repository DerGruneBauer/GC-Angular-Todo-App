import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoComponent],
})
export class AppComponent {
  title = 'TODO LIST';
  subTitle = 'A place to store your todos';

  newTodo: Todo = new Todo();
  searchText = '';
  
  constructor(private todoComponent: TodoComponent){
  }

  addTodo(){
    this.todoComponent.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  isComplete(todo: Todo){
    this.todoComponent.isComplete(todo);
  }

  removeItem(i: number) {
    this.todos.splice(i, 1);
   }

  get todos() {
    return this.todoComponent.getAllTodos();
  }
}