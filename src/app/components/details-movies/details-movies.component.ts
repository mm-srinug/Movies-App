import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-details-movies',
  imports: [CommonModule, RouterLink],
  templateUrl: './details-movies.component.html',
  styleUrl: './details-movies.component.scss'
})
export class DetailsMoviesComponent {
 details: any[] = []
 @Input() limit?: number;


constructor(private route: ActivatedRoute, private http: HttpClient, private movieService: MovieService) {

 } 
   
 ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const movieId: any = params.get('id');
    if (movieId) {
      this.fetchSimilarMovies(movieId);
    }
  });
 }

 fetchSimilarMovies(movieId: number): void {
  this.movieService.getSimilarMovies(movieId).subscribe({
    next: (res: any) => {
      this.details = res.results || [];
      if (this.limit) {
        this.details = this.details.slice(0, this.limit);
      }
    },
    error: (err) => {
      console.error('Error fetching movie credits:', err);
    }
  });
}

 

}
