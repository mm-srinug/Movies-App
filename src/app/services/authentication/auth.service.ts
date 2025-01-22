import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); 
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private http: HttpClient) { }


  getRequestToken(): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}/authentication/token/new?api_key=${environment.apiKey}`);
  }


  validateWithLogin(username: string, password: string, requestToken: string): Observable<any> {
    return this.http.post(`${environment.apiBaseUrl}/authentication/token/validate_with_login?api_key=${environment.apiKey}`, {
      username,
      password,
      request_token: requestToken,
    });
  }

  createSession(requestToken: string): Observable<any> {
    return this.http.post(`${environment.apiBaseUrl}/authentication/session/new?api_key=${environment.apiKey}`, {
      request_token: requestToken,
    });
  }

   login() {
    this.loggedIn.next(true);
  }
  
  logout() {
    this.loggedIn.next(false);
  }
}
 