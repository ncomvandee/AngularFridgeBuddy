import { Component } from '@angular/core';
import {RecipeApiService} from '../recipe-api-service'
import { ActivatedRoute } from '@angular/router';
import { ReviewApiService } from '../review-api.service';
import { Router } from '@angular/router';
import { UUID } from 'angular2-uuid';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-show-recipe',
  templateUrl: './show-recipe.component.html',
  styleUrls: ['./show-recipe.component.css']
})
export class ShowRecipeComponent {
  public recipeApiService: RecipeApiService;
  public reviewApiService: ReviewApiService;
  public recipe: any;
  public reviews: any;

  private sub: any;
  id: string;
  ssoId: any;
  currentUser: any;
  starRating = 0;

  constructor(service: RecipeApiService, private route: ActivatedRoute, reviewService: ReviewApiService, public router : Router, private auth: UserApiService) { 
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

    this.auth.getUserProfile().subscribe(async data => {
      this.currentUser = await JSON.parse(JSON.stringify(data));
      this.ssoId = this.currentUser.userId;
    });
  }

  sendReview(userComment:string, starRating:any) {
    const body = {
      "reviewId": UUID.UUID(),
      "comment": userComment,
      "writer": this.ssoId,
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