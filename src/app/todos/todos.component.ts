import { Component, inject, Inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.model';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';



@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent, FormsModule , FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoServices = inject(TodosService);
  todoItems =signal<Array<Todo>>([]);
  searchTerm = signal('');

 ngOnInit(): void {
 this.todoServices.gettodoapi().subscribe((todos) => {
  this.todoItems.set(todos);
 });
 }
}