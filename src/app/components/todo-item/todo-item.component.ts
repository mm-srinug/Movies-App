import { Component, input } from '@angular/core';
import { Todo } from '../../model/todo.model';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
 todo = input.required<Todo>();
}
