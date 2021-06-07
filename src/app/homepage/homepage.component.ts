import { Component } from '@angular/core';
import { RecipeApiService } from '../recipe-api-service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  recipes : any;
  selected: any;
  recipeService: RecipeApiService;

  constructor(recipeService: RecipeApiService) {
    this.selected = 'Rating'
    this.recipeService = recipeService;

    this.onSelect();
  }

  onSelect() {
    this.recipeService.getTopTenRecipe(this.selected).subscribe((result: any) => {
      this.recipes = result;
    })
  }
}
