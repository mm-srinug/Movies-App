import { Component } from '@angular/core';
import { RouterLink, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-header',
  imports: [RouterLink, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  title = 'My first Angular app';
   
 public searchMovieTitle = "";

  constructor() {}

  ngOnInt(): void {}
}
