import { Output, EventEmitter, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-account-page',
  templateUrl: './user-account-page.component.html',
  styleUrls: ['./user-account-page.component.css']
})
export class UserAccountPageComponent implements OnInit {

  @Output() outToParent = new EventEmitter<string>();
  @Input() user:string;
  
  constructor() { }

  ngOnInit(): void {
  }

  logMeOut(){
    this.outToParent.emit("Login / Sign Up");
  }

}
