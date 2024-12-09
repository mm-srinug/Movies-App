import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  http = inject(HttpClient);
  
 gettodoapi(){
  const url = 'https://jsonplaceholder.typicode.com/todos'
  return this.http.get<Array<Todo>>(url);
 }
  constructor() { }
}
