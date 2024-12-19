import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { initializeApp } from 'firebase/app'; 
// import { environment } from './environment/environment';
// import { enableProdMode } from '@angular/core';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


  // if (environment.production) {
  //   enableProdMode();
  // }
  
  // initializeApp(environment.firebase);

