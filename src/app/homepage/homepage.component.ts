import { Component, OnInit } from '@angular/core';
import {RecipeApiService} from '../recipe-api-service'


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  recipes : any;
  constructor(recipeService: RecipeApiService) { 
    recipeService.getRecipes().subscribe((result: any) =>
    {
        this.recipes = result;
    });
  }

  ngOnInit(): void {
  }

}
