import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, signal , OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TruncatePipe } from '../pipes/truncate.pipe'
import { MovieService } from '../services/movie.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule, TruncatePipe,],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeMessage = signal('Hello, world!');
  startTime: Date = new Date();
  lastUpdated: any;
  carouselItems: any[] = [];
  fanfavorites: any[] = [];
  selectedTrailerUrl: import('@angular/platform-browser').SafeResourceUrl | null = null;
  showPopup: boolean = false;
  moviecards: any[] = []

  constructor(private http: HttpClient, private movieService: MovieService, private sanitizer: DomSanitizer) { 
   }

  ngOnInit(): void {
    this.lastUpdated = this.updateLastUpdated(this.startTime.getTime());
    this.fetchMovies();
    this.getPopularMovies();
    this.fetchcardMovies();
  }

  updateLastUpdated(timestamp: number): string {
    const now = new Date().getTime();
    const diff = now - timestamp;

    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return 'Just now';
    }
  }  
  
  fetchcardMovies(): void {
    this.movieService.fetchcardMovies().subscribe({
      next: (res: any) => {
        this.moviecards = res.results.map((card: any) => ({
             id : card.id,
             title: card.title,
             description: card.overview,
            imageUrl: `https://image.tmdb.org/t/p/original${card.poster_path}`
        }));
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getPopularMovies(): void {
    this.movieService.getPopularMovies().subscribe({
      next: (res: any) => {
        this.fanfavorites = res.results.map((item: any) => ({
           id : item.id,
           title: item.title,
           description: item.overview,
           release_date: item.release_date,
           vote_average: item.vote_average,
           vote_count: item.vote_count,
          imageUrl: `https://image.tmdb.org/t/p/original${item.poster_path}`
        }));
      },
      error: (err) => {
        console.error('Error fetching movies:', err);
      }
    });
  }

  fetchMovies(): void {
    this.movieService.fetchMovies().subscribe({
      next: (res: any) => {
        this.carouselItems = res.results.map((movie: any) => ({
           id : movie.id,
           title: movie.title,
           description: movie.overview,
          imageUrl: `https://image.tmdb.org/t/p/original${movie.poster_path}`
        }));
      },
      error: (err) => {
        console.error('Error fetching movies:', err);
      }
    });
  }  

  getTrailer(movieId: number): void {
    this.movieService.getMovieTrailers(movieId).subscribe(
      (res) => {
        this.selectedTrailerUrl = res.results[0]?.key; 
        if (this.selectedTrailerUrl) {         
          this.selectedTrailerUrl  = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.selectedTrailerUrl}`);
          this.showPopup = true;
        }
        else {
            this.selectedTrailerUrl = null;
        }
      },
      (error) => console.error(error)
    );
  }
  
  closePopup(){
    this.showPopup = false;
  }
}
