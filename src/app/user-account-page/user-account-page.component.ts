import { Output, EventEmitter, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-user-account-page',
  templateUrl: './user-account-page.component.html',
  styleUrls: ['./user-account-page.component.css']
})
export class UserAccountPageComponent implements OnInit {

  public userApiService: UserApiService;
  // @Output() outToParent = new EventEmitter<string>();
  // @Input() loginStatus: string;
  
  constructor(public router : Router, private auth: UserApiService) { 
    this.userApiService = auth;
  }

  ngOnInit(): void {
  }

  logMeOut(){
     this.userApiService.logout().subscribe(async res =>  {
      console.log('Successfully logged out');
      // this.outToParent.emit("false");
      // this.loginStatus = "false";
      await this.router.navigate(['/home']);
      location.reload();
    });
  }

}
