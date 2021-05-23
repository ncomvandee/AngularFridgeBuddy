import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class RecipeApiService{
  url = "http://localhost:4000/recipes";


  constructor(private http: HttpClient){}

  getRecipes() {
      return this.http.get(this.url);
  }

  searchByIngredients(ingredientsArray: Set<string>) {
    let query = '';

    for (let ingredient of ingredientsArray) {
      let temp = 'array=' + ingredient + '&';
      query += temp;
    }

    return this.http.get(this.url + '/byIngredients?' + query );
  }

  searchByCuisine(cuisine: string) {
    return this.http.get(this.url + '/byCuisine/' + cuisine);
  }

  getRecipeById(recipeId: string) {
    return this.http.get(this.url + '/find/' + recipeId);
  }

}