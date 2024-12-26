import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./home/home.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, IonicModule, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})
export class AppComponent {
  title = 'Angular-Movies';
   
}



