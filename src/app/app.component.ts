import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from "./components/footer/footer.component";
import { DetailsComponent } from "./components/details/details.component";
import { FormsModule } from '@angular/forms';
// import { getMessaging, getToken, onMessage } from 'firebase/messaging';
// import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, IonicModule, FooterComponent, DetailsComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})
export class AppComponent {
  title = 'Angular-Movies';
   
    timeNow = new Date;
    fullName: any;

    SelectClick (){
      this.timeNow = new Date;
      console.log(this.timeNow);
    }
  // private messaging = getMessaging();

  // constructor() {
  //   this.requestPermission();
  //   this.receiveMessage();
  // }
   
  // requestPermission() {
  //   getToken(this.messaging, { vapidKey: 'BI--52KOts5-BRnrcK-8cNa8DqbbEgjrNyt1-qo2ZDMENcUQe2pr_fIZQta_cQuJX59CmuIX2gFWfzsrkbVPucs' })
  //     .then((token) => {
  //       console.log('Token:', token);
  //       // Save token to your server
  //     })
  //     .catch((error) => {
  //       console.error('Error getting token', error);
  //     });
  // }

  // receiveMessage() {
  //   onMessage(this.messaging, (payload) => {
  //     console.log('New Message:', payload);
  //   });
  // }

}



