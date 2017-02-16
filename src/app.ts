import {Todo} from './todo';

export class App {

  heading = 'My Tasks';
  todos: Todo[] = [];
  newTodo = '';
  completedTodos = 0;

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

    countNumberOfCompletedTasks() {
      var count = 0;
      for (var todo of this.todos) {
        count = todo.done ? count++ : count;
      }
       this.completedTodos = count;
       return true;
    }
}