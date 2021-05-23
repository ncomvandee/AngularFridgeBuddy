import { Component, Input, OnInit } from '@angular/core';
import {RecipeApiService} from '../recipe-api-service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-recipe',
  templateUrl: './show-recipe.component.html',
  styleUrls: ['./show-recipe.component.css']
})
export class ShowRecipeComponent implements OnInit {
  public recipeApiService: RecipeApiService;
  public recipe: any;
  public reviews: any;

  id: string;
  private sub: any;

  starRating = 0;

  constructor(service: RecipeApiService, private route: ActivatedRoute) { 
    this.recipeApiService = service;

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
    });

    this.recipeApiService.getRecipeById(this.id).subscribe((result: any) =>
    {
        this.recipe = result;
    });

    this.recipeApiService.getReviewsForRecipe(this.id).subscribe((result: any) =>
    {
        this.reviews = result;
    });
  }

  ngOnInit(): void {
  }

}
