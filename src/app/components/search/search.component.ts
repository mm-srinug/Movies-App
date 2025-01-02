import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  movieTitle = '';
   
  constructor( private _activatedRoute: ActivatedRoute ) {

    this._activatedRoute.params.subscribe((p) => {
      this.movieTitle = p["movieTitle"];
    });
  }

   ngOnInit(): void {}

}
