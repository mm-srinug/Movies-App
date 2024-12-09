import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { HeaderComponent } from "../components/header/header.component";
import { CounterComponent } from "../components/counter/counter.component";

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, HeaderComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeMessage = signal('Hello, world!');

  keyUpHandler(event: KeyboardEvent) {
    console.log(`user pressed the ${event.key} key`);
  }
} 

