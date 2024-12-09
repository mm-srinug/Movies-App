import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-counter',
  imports: [RouterOutlet],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counterValue = signal(0);
  increment()  {
    this.counterValue.update(val => val + 1);
  }
  decrement()  {
    this.counterValue.update(val => val - 1);
  }
  recent()  {
    this.counterValue.set(0);
  }
}
