import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-reviews',
  imports: [CommonModule],
  templateUrl: './details-reviews.component.html',
  styleUrl: './details-reviews.component.scss'
})
export class DetailsReviewsComponent {
activeIndex: number = 0;
 reviews: any[] = [];
@Input() limit?: number;
@Output() reviewsFetched = new EventEmitter<boolean>();

 constructor(private route: ActivatedRoute, private http: HttpClient, private movieService: MovieService) {
 
  }  

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const movieId: any = params.get('id');
      if (movieId) {
        this.fetchReview(movieId);
      }
    });
   }
  
 
 fetchReview(movieId: number): void {
  this.movieService.getReview(movieId).subscribe({
    next: (res: any) => {
      this.reviews = res.results 
      if (this.limit) {
        this.reviews = this.reviews.slice(0, this.limit);
      }
      this.reviewsFetched.emit(this.reviews.length > 0);
    },
    error: (err) => {
      console.error('Error fetching movie credits:', err);
      this.reviews = [];
      this.reviewsFetched.emit(false);
    }
  });
}

}
