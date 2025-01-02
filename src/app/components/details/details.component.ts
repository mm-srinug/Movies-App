import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DetailsMoviesComponent } from "../details-movies/details-movies.component";
import { DetailsReviewsComponent } from "../details-reviews/details-reviews.component";
import { DetailsActorsComponent } from "../details-actors/details-actors.component";
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DetailsMoviesComponent, DetailsReviewsComponent, DetailsActorsComponent, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit{
   movieId = 0;
   
    constructor(
      private _activetedRoute: ActivatedRoute
    ) {

      this._activetedRoute.params.subscribe((p) => {
        this.movieId = p["id"];

        console.log('Movie ID: ', this.movieId);
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

}
