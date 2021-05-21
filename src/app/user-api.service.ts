import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  url = "http:/localhost:4000/users";
  body:any;

  constructor(private http: HttpClient){}
  
  addUser(body:any) {
    console.warn(body);
    return this.http.post(this.url, body);
}
  
}




