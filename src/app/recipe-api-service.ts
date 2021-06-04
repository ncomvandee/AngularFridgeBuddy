import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class RecipeApiService{
  //hostUrl:string = 'http://fridgebuddy555.azurewebsites.net';
  path:string = '/recipes';

  constructor(private http: HttpClient){}

  getRecipes() {
      return this.http.get(this.path);
  }

  searchByIngredients(ingredientsArray: Set<string>) {
    let query = '';

    for (let ingredient of ingredientsArray) {
      let temp = 'array=' + ingredient + '&';
      query += temp;
    }

    return this.http.get(this.path + '/byIngredients?' + query);
  }

  searchByCuisine(cuisine: string) {
    return this.http.get(this.path + '/byCuisine/' + cuisine);
  }

  getRecipeById(recipeId: string) {
    return this.http.get(this.path + '/find/' + recipeId);
  }

  getReviewsForRecipe(recipeId: string) {
    return this.http.get(this.path + '/getReviewList/' + recipeId);
  }

  getTopTenRecipe(filter: string) {
    return this.http.get(this.path + '/topTenBy' + filter);
  }
  
}