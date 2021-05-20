import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-by-ingredients',
  templateUrl: './search-by-ingredients.component.html',
  styleUrls: ['./search-by-ingredients.component.css']
})
export class SearchByIngredientsComponent implements OnInit {

  public ingredientsArray: Array<string>;
  public selectedIngredients: Set<string>;

  constructor() {
    this.ingredientsArray = ['Egg','Broccolli', 'Beef'];
    this.selectedIngredients = new Set;
   }

   onSelectIngredient(ingredient: any) {
     this.selectedIngredients.add(ingredient);
     
   }

   clearList() {
     this.selectedIngredients = new Set;
   }

  ngOnInit(): void {
  }

}
