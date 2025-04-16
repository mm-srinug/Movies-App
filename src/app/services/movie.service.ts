import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  
  getMoviesByTitle(title: string): Observable<any> {
    const apiUrl = `${environment.apiBaseUrl}/search/movie?api_key=${environment.apiKey}&query=${title}`;
    return this.http.get(apiUrl);
  }

  fetchMovies(): Observable<any> {
    const randomPage = Math.floor(Math.random() * 500) + 1;
    const apiUrl = `${environment.apiBaseUrl}/discover/movie?api_key=${environment.apiKey}&page=${randomPage}`;     
    return this.http.get(apiUrl);
  }
  
  fetchcardMovies(): Observable<any> {
    const randomPage =Math.floor(Math.random() * 500)  +1;
    const apiUrl =`${environment.apiBaseUrl}/trending/all/day?api_key=${environment.apiKey}&page=${randomPage}`;
    return this.http.get(apiUrl);
  }

  getMovieTrailers(movieId: number): Observable<any> {
    const apiUrl = `${environment.apiBaseUrl}/movie/${movieId}/videos?api_key=${environment.apiKey}`;  
    return this.http.get(apiUrl);
  }
   
  getPopularMovies(): Observable<any> {
    const apiUrl = `${environment.apiBaseUrl}/movie/popular?api_key=${environment.apiKey}`;
    return this.http.get(apiUrl);
  } 

  getMovieDetails(movieId: string): Observable<any> {
    const apiUrl = `${environment.apiBaseUrl}/movie/${movieId}?api_key=${environment.apiKey}`;
    return this.http.get(apiUrl);
  }
  
  getMovieCredits(movieId: string): Observable<any> {
    const apiUrl = `${environment.apiBaseUrl}/movie/${movieId}/credits?api_key=${environment.apiKey}`;
    return this.http.get<any>(apiUrl);
  }
  
  getSimilarMovies(movieId: number): Observable<any> {
    const apiUrl = `${environment.apiBaseUrl}/movie/${movieId}/similar?api_key=${environment.apiKey}`;
    return this.http.get(apiUrl);
  }

  getReview(movieId: number): Observable<any> {
    const apiUrl = `${environment.apiBaseUrl}/movie/${movieId}/reviews?api_key=${environment.apiKey}`;
    return this.http.get(apiUrl);
  }
  
  getActorDetails(actorId: number): Observable<any> {
    const apiUrl = `${environment.apiBaseUrl}/person/${actorId}?api_key=${environment.apiKey}`;
    return this.http.get(apiUrl);
  }
}


