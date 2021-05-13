import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class RecipeApiService{
  url = "http://localhost:4000/recipes";


  constructor(private http: HttpClient){}

  getRecipes()
    {
      return this.http.get(this.url);
    }
}