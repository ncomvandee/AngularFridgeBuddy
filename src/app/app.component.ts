import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from './user-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
 
  title = 'FridgeBuddy';
  isLoggedIn:boolean = false; 
  currentUser:string;

  constructor(public router : Router, private auth: UserApiService) {
    console.log("app.component.ts: " + this.isLoggedIn); 
    this.auth.getStatus().subscribe(res => {
      this.isLoggedIn = (/true/i).test(res);
      console.log("Inside here " + this.isLoggedIn);
      if(this.isLoggedIn){
        this.auth.getUserProfile().subscribe(data => {
          this.currentUser = JSON.stringify(data).replace(/"/g,"");
          this.currentUser = 'Hi, '+ this.currentUser;
        })
      } else {
        this.currentUser = "Login";
        this.isLoggedIn = false;
      }
    })
  }

  // logoutUser(status: string) {
  //   this.isLoggedIn = (/true/i).test(status);
  // }

  // GetuserNameVal(name: string) {
  //   this.currentUser = "Hi "+ name + "!";
  // }

  // GetuserNameVal(name:string) {
  //   if(name) {
  //     this.currentUser = "Hi "+ name + "!";
  //   }
  //   this.DisplayLogIn = false;
  // }

  // logMeOut(user:string){
  //   this.currentUser = user;
  //   if(this.currentUser != "Login / Sign Up")
  //   {
  //     this.DisplayLogout = true;
  //   }
  //   else{
  //     this.DisplayLogout = false;
  //     this.router.navigate(['/home']);
  //   }
  // }

  ChangeLoginStats() {
    if(this.currentUser != "Login / Sign Up") {
      // name:string = 
      this.router.navigate(['/account']);
    } else {
       this.currentUser = "Login / Sign Up";
       this.router.navigate(['/login']);
    }
  }

  // ChangeCusinStats() {
  //   if(this.currentUser == "Login / Sign Up") {
  //     // this.DisplayLogIn = false;
  //   } 
  //   // this.DisplayLogout = false;
  // }
  
  // ChangeIngeredientStats() {
  //   if(this.currentUser == "Login / Sign Up") {
  //     // this.DisplayLogIn = false;
  //   } 
  //   // this.DisplayLogout = false;
  // }

  // ChangeHomePageStats() {
  //   if(this.currentUser == "Login / Sign Up") {
  //     // this.DisplayLogIn = false;
  //   }
  //   // this.DisplayLogout = false;

  // }
 
}
