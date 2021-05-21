import { Component, Directive, Input, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})


export class LoginPageComponent implements OnInit, OnDestroy { 
  body:any;

  constructor() {}
    addNewUser(userService: UserApiService) { 
      userService.addUser(this.body).subscribe((result: any) =>
      {
        console.log(result);
      });
    }

    getUserInputs(username, password){
    console.warn(username)
    console.warn(password)
     this.body = {
      "userId": username,
      "password": password,
      "email": "",
      "firstName": "",
      "lastName": "",
      "isPremium": false,
      "favoriteList": [],
      "recentlyView": []
    }

    console.warn( this.body);

  }

 



  ngOnChanges(changes: SimpleChange){
      for (const propName in changes){
        const chng = changes[propName];
        const cur = JSON.stringify(chng.currentValue);
        const prev = JSON.stringify(chng.previousValue);
      }
  }
  ngOnInit(): void {
  }

  ngOnDestroy(){
    
  }


}
