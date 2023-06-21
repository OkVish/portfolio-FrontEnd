import { Component } from '@angular/core';
import firebase from "firebase/compat/app"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend-YoProgramo';
  constructor() { }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCPI8I3rTw6ki_FD04wqGMHfQDBzKyY2JI",

      authDomain: "login-portfolio-b1b95.firebaseapp.com",

    })
  }
}


