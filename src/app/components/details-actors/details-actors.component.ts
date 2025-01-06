import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-details-actors',
  imports: [CommonModule],
  templateUrl: './details-actors.component.html',
  styleUrl: './details-actors.component.scss'
})
export class DetailsActorsComponent {
 
  actors = [
    { 
      cover: 'https://image.tmdb.org/t/p/original/1T21FblunT0y8fz7YaW8JMYgUKm.jpg',
      name: 'Allu Arjun',
      role: 'Hero',
    },
    { 
      cover: 'https://image.tmdb.org/t/p/original/cpz0u8sK993MhIQ46xL4l6b40Cg.jpg',
      name: 'Mahesh Babu',
      role: 'Hero',
    },
    { 
      cover: 'https://image.tmdb.org/t/p/original/w46Vw536HwNnEzOa7J24YH9DPRS.jpg',
      name: 'Hritik Roshan',
      role: 'Hero',
    }
  ]

}
