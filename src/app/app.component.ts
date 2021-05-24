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
  DisplayLogout:boolean = true;
  alreadyLoggedIn:boolean = false;
  currentUser:string = "Login / Sign Up";


  constructor(public router : Router) {
     this.DisplayLogIn = false;
    //  this.DisplayLogout = false;
  }

  GetuserNameVal(name:string) {
    if(name) {
      this.currentUser = "Hi "+ name + "!";
    }
    this.DisplayLogIn = false;
  }

  logMeOut(user:string){
    this.currentUser = user;
    if(this.currentUser != "Login / Sign Up")
    {
      this.DisplayLogout = true;
    }
    else{
      this.DisplayLogout = false;
      this.router.navigate(['/home']);
    }
  }

  ChangeLoginStats() {
    if(this.currentUser != "Login / Sign Up") {
      this.DisplayLogIn = false;
      this.alreadyLoggedIn = true;
      this.DisplayLogout = true;
      this.router.navigate(['/account']);
    } else {
       this.DisplayLogIn = true;
       this.DisplayLogout = false;
    }
  }

  ChangeCusinStats() {
    if(this.currentUser == "Login / Sign Up") {
      this.DisplayLogIn = false;
    } else {
      this.alreadyLoggedIn = false;
    }
    this.DisplayLogout = false;
  }
  
  ChangeIngeredientStats() {
    if(this.currentUser == "Login / Sign Up") {
      this.DisplayLogIn = false;
    } else {
      this.alreadyLoggedIn = false;
    }
    this.DisplayLogout = false;
  }

  ChangeHomePageStats() {
    this.alreadyLoggedIn = false;
    if(this.currentUser == "Login / Sign Up") {
      this.DisplayLogIn = false;
    } else {
      this.alreadyLoggedIn = false;
    }
    this.DisplayLogout = false;

  }
 
}
