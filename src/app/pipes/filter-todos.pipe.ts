import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../Model/todo.model';

@Pipe({
  name: 'filterTodos',
  standalone: true
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: Todo[], searchTerm: string): Todo[] {
    if (!searchTerm) {
      return todos;
    }
    const text = searchTerm.toLowerCase();
    return todos.filter((todo) => {
      return (
        todo.title.toLowerCase().includes(text) ||
        (typeof todo.completed === "boolean" && text === String(todo.completed).toLowerCase())
      );
    });
  }

}
