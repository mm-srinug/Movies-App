import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-details-actors',
  imports: [CommonModule],
  templateUrl: './details-actors.component.html',
  styleUrl: './details-actors.component.scss'
})
export class DetailsActorsComponent {
  @Input() movieId!: string | null;
  @Input() limit?: number;
  showPopup = false;
  selectedActor: any = null;
  actors: any[] = []
  showFullBio: boolean = false;

 constructor(private route: ActivatedRoute, private http: HttpClient, private movieService: MovieService) {

 } 
 ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const movieId = params.get('id');
    if (movieId) {
      this.fetchactors(movieId);
      this.movieId = movieId;
    }
  });
 } 

  fetchactors(movieId: string): void {
    this.movieService.getMovieCredits(movieId).subscribe({
      next: (res: any) => {
        this.actors = res.cast || [];
        if (this.limit) {
          this.actors = this.actors.slice(0, this.limit);
        }
      },
      error: (err) => {
        console.error('Error fetching actors:', err);
      },
    });
  }  


  onActorCardClick(actorId: number): void {
    if (!this.limit) {
      this.movieService.getActorDetails(actorId).subscribe({
        next: (res: any) => {
          this.selectedActor = res
          this.showPopup = true; 
          this.showFullBio = false;
        },
        error: (err) => {
          console.error('Error fetching tagged images:', err);
        }
      });
    }
  }
  toggleBio(): void {
    this.showFullBio = !this.showFullBio;
  }
  closePopup(): void {
    this.showPopup = false; 
  }
 
}
