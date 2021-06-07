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
  isLoggedIn: boolean = false; 
  currentUser: any;

  constructor(public router : Router, private auth: UserApiService) {
    console.log("app.component.ts: " + this.isLoggedIn); 
    this.auth.getStatus().subscribe(res => {
      this.isLoggedIn = (/true/i).test(res);
      console.log("Inside here " + this.isLoggedIn);
      if(this.isLoggedIn){
        this.auth.getUserProfile().subscribe(data => {
          this.currentUser = JSON.parse(JSON.stringify(data));
          this.currentUser = 'Hi, '+ this.currentUser.displayName;
        })
      } else {
        this.currentUser = "Login";
        this.isLoggedIn = false;
      }
    })
  }
}