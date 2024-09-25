import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  public todos:Todo[] = [
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Walk the dog', completed: true },
    { id: 3, title: 'Pay bills', completed: false },
    { id: 4, title: 'Call mom', completed: true },
    { id: 5, title: 'Finish homework', completed: false }
  ];      
  public newTodoTitle: string = '';
  constructor() {
        }

        removetodo(index:number):void {
          this.todos.splice(index, 1);
        }


        addTodo(): void {
          if (this.newTodoTitle.trim() === '') return;  // Additional safeguard
      
          const newTodo: Todo = {
            id: this.todos.length + 1,
            title: this.newTodoTitle,
            completed: false
          };
      
          this.todos.push(newTodo);
          this.newTodoTitle = ''; // Clear the input after adding
        }
      
}
