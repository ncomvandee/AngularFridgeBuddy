import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewApiService {

  path:string = '/reviews/';

  constructor(private http: HttpClient) { }

  postReview(body: any, recipeId: string) {
    console.log("The body is: " + JSON.stringify(body));
    console.log("The recipeid is: " + recipeId);
    return this.http.post(this.path + recipeId, body);
  }
}
