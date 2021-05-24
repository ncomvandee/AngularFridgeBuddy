import { Component, Input,Output, EventEmitter } from '@angular/core';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})


export class LoginPageComponent  { 
  body:any;
  
  @Input() user:string;
  @Output() outToParent = new EventEmitter<string>();

  constructor() {}

  addNewUser(userService: UserApiService) { 
    userService.addUser(this.body).subscribe((result: any) =>
    {
      console.log(result);
    });
  }

  sendUserInputs(username, password){
    this.outToParent.emit(username);
  }

}
