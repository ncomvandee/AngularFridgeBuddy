import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from  'rxjs';

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

  getUserProfile() {
    return this.http.get(this.path + "/auth/user");
  }

  getStatus(): Observable<string>  {
    return this.http.get<string>(this.path + "/loggedIn");
  } 

  logout() {
    return this.http.get(this.path + "/logout");
  }

  getSingleUser(ssoId:string) {
    console.log("the sso id after being passed is: " + ssoId);
    return this.http.get(this.path + "/ssoId/" + ssoId);
  }
  
}
