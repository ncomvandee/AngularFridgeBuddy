import { Component } from '@angular/core';
import { RecipeApiService} from '../recipe-api-service';

@Component({
  selector: 'app-search-by-cuisine',
  templateUrl: './search-by-cuisine.component.html',
  styleUrls: ['./search-by-cuisine.component.css']
})

export class SearchByCuisineComponent {
  public recipeApiService: RecipeApiService;
  public result: any;
  foundCuisine: boolean;

  constructor(service: RecipeApiService) { 
    this.recipeApiService = service;
    this.result = null;
    this.foundCuisine = false;
  }

  searchRecipe(cuisine){
    if (cuisine.length) {
      this.recipeApiService.searchByCuisine(cuisine).subscribe((result: any) => {
        this.result = result;
        this.foundCuisine = true;
        console.warn(result);
      })
    } else {
      this.foundCuisine = false;
      this.result = null;
    }
  }
}