import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-details-movies',
  imports: [CommonModule],
  templateUrl: './details-movies.component.html',
  styleUrl: './details-movies.component.scss'
})
export class DetailsMoviesComponent {
 
  details = [
       {   
        cover:'https://image.tmdb.org/t/p/original/4YZpsylmjHbqeWzjKpUEF8gcLNW.jpg',
        title: 'Monna 2',
        rating: '9.1/10'
      },
      {
       cover:'https://image.tmdb.org/t/p/original/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg', 
       title: 'Lion King',
       rating: '8.1/10'
    },
    {
      cover:'https://image.tmdb.org/t/p/original/1T21FblunT0y8fz7YaW8JMYgUKm.jpg', 
      title: 'Pushpa 2',
      rating: '7.1/10'
  }
  ]

}
