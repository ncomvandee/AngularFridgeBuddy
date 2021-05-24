import { Component, Input,Output, EventEmitter, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})


export class LoginPageComponent implements OnInit  { 
  body:any;
  
  @Input() user:string;
  @Output() outToParent = new EventEmitter<string>();
  allUsers:any;
  userService: UserApiService
  Router: any;

  constructor(userService: UserApiService, Router: Router) {
    this.userService = userService;
    this.onSelect();
    this.Router = Router;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSelect(){
    this.userService.getAllUsers().subscribe((result: any) =>
    {
      this.allUsers = result;
    });
    

  }

  addNewUser() { 

    this.userService.addUser(this.body).subscribe((result: any) =>
    {
      console.log(result);
    });
  }

  sendUserInputs(username, password){

    let isValidUser: boolean = false;
    for (var i = 0; i < this.allUsers.length; i++)
      {
        console.warn(this.allUsers[i].userId);
        if(this.allUsers[i].userId == username &&
           this.allUsers[i].password == password ){
           isValidUser = true;
           break;
        }
      }

    if(isValidUser){
      this.outToParent.emit(username);
      this.Router.navigate(['/home']);
    }
  }

}
