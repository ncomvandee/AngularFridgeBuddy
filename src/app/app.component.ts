import { ElementRef, OnInit } from '@angular/core';
import { Component } from '@angular/core';

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


  constructor(readonly element: ElementRef<HTMLElement>) {
     console.warn(element.nativeElement);
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
