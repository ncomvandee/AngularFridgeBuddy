import { Component, Input, OnInit } from '@angular/core';
import {RecipeApiService} from '../recipe-api-service'
import { ActivatedRoute } from '@angular/router';
import { ReviewApiService } from '../review-api.service';
import { Router } from '@angular/router';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-show-recipe',
  templateUrl: './show-recipe.component.html',
  styleUrls: ['./show-recipe.component.css']
})
export class ShowRecipeComponent implements OnInit {
  public recipeApiService: RecipeApiService;
  public reviewApiService: ReviewApiService;
  public recipe: any;
  public reviews: any;

  id: string;
  private sub: any;

  starRating = 0;

  constructor(service: RecipeApiService, private route: ActivatedRoute, reviewService: ReviewApiService, public router : Router) { 
    this.recipeApiService = service;
    this.reviewApiService = reviewService;

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
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

  sendReview(userComment:string, starRating:any) {
    const body = {
      "reviewId": UUID.UUID(),
      "comment": userComment,
      "writer": "abc",
      "date": new Date().toLocaleDateString(),
      "rate": starRating
    }
    this.reviewApiService.postReview(body, this.id).subscribe(async res =>
    {
      console.log('Successfully posted');
      await this.router.navigate(['/showRecipe/' + this.id]);
      location.reload();
    });
  }

}
