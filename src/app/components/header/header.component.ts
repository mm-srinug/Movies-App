import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/authentication/auth.service';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  title = 'My first Angular app';
  isLoggedIn = false; 
  isLoginPage = false;
   public searchMovieTitle = "";

 constructor(private authService: AuthService, private router: Router) {
    }; 

  ngOnInit(): void {
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    }
    this.authService.isLoggedIn$.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isLoginPage = this.router.url === '/login';
    });
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
  }

  

}

