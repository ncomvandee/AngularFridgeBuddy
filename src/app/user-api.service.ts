import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  hostUrl:string = 'https://fridgebuddy555.azurewebsites.net';
  path:string = '/users';
  body:any;

  constructor(private http: HttpClient){}
  
  addUser(body:any) {
    console.warn(body);
    return this.http.post(this.hostUrl + this.path, body);
  }

  getAllUsers() {
    return this.http.get(this.hostUrl + this.path);
  } 
  
}




