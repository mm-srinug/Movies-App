import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { CounterComponent } from './components/counter/counter.component';

export const routes: Routes = [
    {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./home/home.component').then((m) => m.HomeComponent)   
    }
},
{
    path: 'test',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./todos/todos.component').then((m) => m.TodosComponent)   
    }
}
];


