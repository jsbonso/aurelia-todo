import {Todo} from './todo';

export class App {

  heading = 'My Tasks';
  todos: Todo[] = [];
  newTodo = '';

  addTodo() {
    if (this.newTodo) {
      this.todos.push(new Todo(this.newTodo));
      this.newTodo = '';
    }
  }

  removeTodo(todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}