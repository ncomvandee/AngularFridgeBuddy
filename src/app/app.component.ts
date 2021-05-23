import { ElementRef, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
 
  title = 'FridgeBuddy';
  DisplayLogIn:boolean = true;
  alreadyLoggedIn:boolean = false;
  currentUser:string = "Login / Sign Up";


  constructor(public router : Router) {
     this.DisplayLogIn = false;
  }

  GetuserNameVal(name:string) {
    if(name) {
      this.currentUser = "Hi "+ name + "!";
    }
    this.DisplayLogIn = false;
  }

  ChangeLoginStats() {
    if(this.currentUser != "Login / Sign Up") {
      this.DisplayLogIn = false;
      this.alreadyLoggedIn = true;
      this.router.navigate(['/account']);
    } else {
       this.DisplayLogIn = true;
    }
  }

  ChangeCusinStats() {
    if(this.currentUser == "Login / Sign Up") {
      this.DisplayLogIn = false;
    } else {
      this.alreadyLoggedIn = false;
    }
  }
  
  ChangeIngeredientStats() {
    if(this.currentUser == "Login / Sign Up") {
      this.DisplayLogIn = false;
    } else {
      this.alreadyLoggedIn = false;
    }
  }

  ChangeHomePageStats() {
    this.alreadyLoggedIn = false;
    if(this.currentUser == "Login / Sign Up") {
      this.DisplayLogIn = false;
    } else {
      this.alreadyLoggedIn = false;
    }
  }
 
}
