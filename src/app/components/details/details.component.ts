import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DetailsMoviesComponent } from "../details-movies/details-movies.component";
import { DetailsReviewsComponent } from "../details-reviews/details-reviews.component";
import { DetailsActorsComponent } from "../details-actors/details-actors.component";
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DetailsMoviesComponent, DetailsReviewsComponent, DetailsActorsComponent, RouterLink,CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit {
  movieId: number | null = null;
  movieDetails: any = {};
  stars = [1,2,3,4];
  directors = ['Steven Spielberg', 'Christopher Nolan', 'Martin Scorsese','Quentin Tarantino'];
  generes = ['Action', 'Adventure', 'Comedy', 'Drama'];
  poster: any;

  trailers: any[] = [];

  constructor(private _activatedRoute: ActivatedRoute, private http: HttpClient, private movieService: MovieService) {
    this._activatedRoute.params.subscribe((params) => {
      this.movieId = +params['id'];
      if (this.movieId) {
        this.fetchMovieDetails(this.movieId);
      }
    });
  }
    


    
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called.');
  }

  ngOnInit(): void {
    console.log('ngOnInit called.');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called.');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called.');
  }

  fetchMovieDetails(id: number): void {
    const API_KEY = '1be06d8ed8e69a40859258563b26f0e7';
    const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

    this.http.get(API_URL).subscribe((res: any) => {
      this.movieDetails = res;
      this.poster = `https://image.tmdb.org/t/p/original${this.movieDetails.poster_path}`
    });
  }


}
