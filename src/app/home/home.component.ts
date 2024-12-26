import { Component, signal , OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeMessage = signal('Hello, world!');
  startTime: Date = new Date();
  lastUpdated: any;

  constructor() { }

  ngOnInit(): void {
    const storedStartTime = localStorage.getItem('startTime');
    if (storedStartTime) {
      this.startTime = new Date(storedStartTime);
    } else {
      this.startTime = new Date();
      localStorage.setItem('startTime', this.startTime.toISOString());
    }
    this.updateLastUpdated();
    setInterval(() => this.updateLastUpdated(), 60000); 
  }

 
  updateLastUpdated(): void {
    const now = new Date();
    const elapsedTime = now.getTime() - this.startTime.getTime();
    const minutes = Math.floor(elapsedTime / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    const remainingMinutes = minutes % 60;

    if (days > 0) {
      this.lastUpdated = `${days} days, ${remainingHours} hours:${remainingMinutes} minutes`;
    } else if (hours > 0) {
      this.lastUpdated = `${hours} hours:${remainingMinutes} minutes`;
    } else {
      this.lastUpdated = `${remainingMinutes} minutes`;
    }
  }
}


