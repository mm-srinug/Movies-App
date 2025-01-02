import { NgModel } from '@angular/forms';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./home/home.component').then((m) => m.HomeComponent);
    }
  },
  {
    path: 'details/:id',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./components/details/details.component').then((m) => m.DetailsComponent);
    }
  },
  {
    path: 'details/actors/:id',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./components/details-actors/details-actors.component').then((m) => m.DetailsActorsComponent);
    }
  },
  {
    path: 'details/movies/:id',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./components/details-movies/details-movies.component').then((m) => m.DetailsMoviesComponent);
    }
  },
  {
    path: 'details/reviews/:id',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./components/details-reviews/details-reviews.component').then((m) => m.DetailsReviewsComponent);
    }
  },
  {
    path: 'search/:movieTitle',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./components/search/search.component').then((m) => m.SearchComponent);
    }
  },
  {
    path: '**',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./components/not-found/not-found.component').then((m) => m.NotFoundComponent);
    }
  }
];


