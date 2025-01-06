import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-search',
  imports: [CommonModule, RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  movieTitle = '';
  movies: any[] = [];
  selectedTrailer: SafeResourceUrl | null = null;
  selectedMovieTitle: string | null = null;

  constructor(private _activatedRoute: ActivatedRoute, private http: HttpClient, private sanitizer: DomSanitizer,  private movieService: MovieService ) {
    this._activatedRoute.params.subscribe((p) => {
      this.movieTitle = p["movieTitle"];
    });
  }

  fetchMovies(title: string): void {
    this.movieService.getMoviesByTitle(title).subscribe((res: any) => {
      this.movies = res.results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        description: movie.overview,
        cover: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        trailer: null
      }));
      this.fetchMovieTrailers();
    });
  }

fetchMovieTrailers(): void {
    this.movies.forEach((movie) => {
      this.movieService.getMovieTrailers(movie.id).subscribe((response: any) => {
        const trailer = response.results.find((video: { type: string; }) => video.type === 'Trailer');
        if (trailer) {
          movie.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${trailer.key}`);
        }
        else {
          movie.trailer = null;
        }
      });
    });
  }  

  showTrailer(trailerUrl: SafeResourceUrl | null, movieTitle: string): void {
    this.selectedTrailer = trailerUrl;
    this.selectedMovieTitle = movieTitle;
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((p) => {
      this.movieTitle = p["movieTitle"];
      this.fetchMovies(this.movieTitle);
    });
  }
}
