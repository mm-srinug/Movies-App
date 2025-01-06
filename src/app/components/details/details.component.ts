import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, Sanitizer, SimpleChanges } from '@angular/core';
import { DetailsMoviesComponent } from "../details-movies/details-movies.component";
import { DetailsReviewsComponent } from "../details-reviews/details-reviews.component";
import { DetailsActorsComponent } from "../details-actors/details-actors.component";
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../../services/movie.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FilterByJobPipe } from '.././../pipes/filter-by-job.pipe'; 
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DetailsMoviesComponent, DetailsReviewsComponent, DetailsActorsComponent, RouterLink,CommonModule,FilterByJobPipe],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit {
  movieId: number | null = null;
  movieDetails: any = {};
  poster: any;
  selectedTrailerUrl: import('@angular/platform-browser').SafeResourceUrl | null = null;
  showPopup: boolean = false;
  trailers: any[] = [];
  credits: any = {};
  videos: any = [];
  

  constructor(private route: ActivatedRoute, private http: HttpClient, private movieService: MovieService, private sanitizer: DomSanitizer) {
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const movieId = params.get('id');
      if (movieId) {
        this.getMovieDetails(movieId);
        this.getMovieCredits(movieId);
      }
    });
   } 
  getMovieDetails(movieId: string): void {
    this.movieService.getMovieDetails(movieId).subscribe({
      next: (res: any) => {
        this.movieDetails = res;
        this.getMovieTrailers(movieId);
      },
      error: (err) => {
        console.error('Error fetching movie details:', err);
      }
    });
  } 

  getMovieTrailers(movieId: string): void {
    this.movieService.getMovieTrailers(Number(movieId)).subscribe({
      next: (res: any) => {
        if (res.results.length > 0) {
          this.selectedTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            'https://www.youtube.com/embed/' + res.results[0]?.key
          );
        } else {
          this.selectedTrailerUrl = null; 
        }
      },
      error: (err) => {
        console.error('Error fetching movie trailers:', err);
      }
    });
  }
  
  getMovieCredits(movieId: string): void {
    this.movieService.getMovieCredits(movieId).subscribe({
      next: (res: any) => {
        this.credits = res;
      },
      error: (err) => {
        console.error('Error fetching movie credits:', err);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called.');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called.');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called.');
  } 

}
