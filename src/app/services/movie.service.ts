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
    const creditsUrl = `${environment.apiBaseUrl}/movie/${movieId}/credits?api_key=${environment.apiKey}`;
    return this.http.get(creditsUrl);
  }
  
  getActors(movieId: string): Observable<any> {
    const apiUrl = `${environment.apiBaseUrl}/movie/${movieId}/credits?api_key=${environment.apiKey}`;
    return this.http.get(apiUrl);
  }
   
}


