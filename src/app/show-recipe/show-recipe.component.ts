import { Component, Input, OnInit } from '@angular/core';
import {RecipeApiService} from '../recipe-api-service'

@Component({
  selector: 'app-show-recipe',
  templateUrl: './show-recipe.component.html',
  styleUrls: ['./show-recipe.component.css']
})
export class ShowRecipeComponent implements OnInit {
  @Input() recipeId: any;

  public recipeApiService: RecipeApiService;
  public recipe: any;

  constructor(service: RecipeApiService) { 
    this.recipeApiService = service;
    this.recipeApiService.getRecipeById("2").subscribe((result: any) =>
    {
        this.recipe = result;
    });
  }

  ngOnInit(): void {
  }

}
