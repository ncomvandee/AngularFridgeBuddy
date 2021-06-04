import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  path:string = '/users';
  body:any;

  constructor(private http: HttpClient){}
  
  addUser(body:any) {
    console.warn(body);
    return this.http.post(this.path, body);
  }

  getAllUsers() {
    return this.http.get(this.path);
  } 
  
}




