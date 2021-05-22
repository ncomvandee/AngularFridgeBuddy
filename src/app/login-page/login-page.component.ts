import { Component, Directive, Input,Output, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChange, ElementRef } from '@angular/core';
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
  
  @Input() user:string;
  @Input() show:boolean = true;
  @Output() outToParent = new EventEmitter<string>();

  constructor(readonly element: ElementRef<HTMLElement>) {
    // this.element.nativeElement.remove();

  }



    addNewUser(userService: UserApiService) { 
      userService.addUser(this.body).subscribe((result: any) =>
      {
        console.log(result);
      });
    }

    sendUserInputs(username, password){
  
    this.outToParent.emit(username);
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
