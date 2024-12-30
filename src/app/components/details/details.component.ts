import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DetailsMoviesComponent } from "../details-movies/details-movies.component";
import { DetailsReviewsComponent } from "../details-reviews/details-reviews.component";
import { DetailsActorsComponent } from "../details-actors/details-actors.component";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DetailsMoviesComponent, DetailsReviewsComponent, DetailsActorsComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit{
    constructor() {}

 
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
