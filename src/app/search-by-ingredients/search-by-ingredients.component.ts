import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RecipeApiService} from '../recipe-api-service';

@Component({
  selector: 'app-search-by-ingredients',
  templateUrl: './search-by-ingredients.component.html',
  styleUrls: ['./search-by-ingredients.component.css']
})
export class SearchByIngredientsComponent implements OnInit {

  public ingredientsArray: Array<string>;
  public selectedIngredients: Set<string>;
  public resultArray: any;
  public recipeApiService: RecipeApiService;

  constructor(service: RecipeApiService) {
    this.ingredientsArray = ['Egg','Broccoli', 'Beef', 'Salmon'];
    this.selectedIngredients = new Set;
    this.resultArray = [];
    this.recipeApiService = service;
   }

   onSelectIngredient(ingredient: any) {
     this.selectedIngredients.add(ingredient);

     this.getResultFromIngredient();
     
   }

   clearList() {
     this.selectedIngredients = new Set;

     this.resultArray = [];
   }

   removeIngredient(ingredient: any) {
     this.selectedIngredients.delete(ingredient);

     this.getResultFromIngredient();
   }

   getResultFromIngredient() {

    if (this.selectedIngredients.size != 0) {
      this.recipeApiService.searchByIngredients(this.selectedIngredients).subscribe((result: any) => {
        this.resultArray = result;
      })
    }
    else {
      this.resultArray = [];
    }

   
   }



  ngOnInit(): void {
  }

}
