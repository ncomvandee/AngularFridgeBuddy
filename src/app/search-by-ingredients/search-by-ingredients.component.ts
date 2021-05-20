import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-by-ingredients',
  templateUrl: './search-by-ingredients.component.html',
  styleUrls: ['./search-by-ingredients.component.css']
})
export class SearchByIngredientsComponent implements OnInit {

  public ingredientsArray: Array<string>;
  public selectedIngredients: Array<string>;

  constructor() {
    this.ingredientsArray = ['Egg','Broccolli', 'Beef'];
    this.selectedIngredients = [];
   }

   onSelectIngredient(ingredient: any) {

     this.selectedIngredients.push(ingredient);
   }

  ngOnInit(): void {
  }

}
