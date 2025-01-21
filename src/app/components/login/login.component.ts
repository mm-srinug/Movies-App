import { Component } from '@angular/core';
import { AuthService } from '../../services/authentication/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = '';
  password = '';
  requestToken = '';
  sessionId = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Handle Login
  onLogin() {
    this.authService.getRequestToken().subscribe(
      (response) => {
        this.requestToken = response.request_token;
        this.authService
          .validateWithLogin(this.username, this.password, this.requestToken)
          .subscribe(
            (res) => {
              this.authService.createSession(this.requestToken).subscribe(
                (sessionRes) => {
                  this.sessionId = sessionRes.session_id;
                  console.log('Login successful, Session ID:', this.sessionId);
                  this.router.navigate(['/home']);
                },
                (err) => console.error('Error creating session:', err)
              );
            },
            (err) => console.error('Error validating token:', err)
          );
      },
      (err) => console.error('Error fetching request token:', err)
    );
  }
  
}
