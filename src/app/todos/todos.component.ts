import { Component, inject, Inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../Model/todo.model';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';



@Component({
  selector: 'app-todos',
  imports: [FormsModule , FilterTodosPipe],
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
