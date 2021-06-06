import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class IngredientApiService {

  path:string = '/ingredients';

  constructor(private http: HttpClient) { }

  getIngredients() {
    return this.http.get(this.path);
  }
}
