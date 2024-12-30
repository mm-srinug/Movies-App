import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./components/details/details.component";
import { NgModel } from '@angular/forms';
import { SearchComponent } from "./components/search/search.component";


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, IonicModule, FooterComponent, HomeComponent, DetailsComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})
export class AppComponent {
  title = 'Angular-Movies';
}


