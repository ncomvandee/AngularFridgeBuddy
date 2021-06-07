import { Output, EventEmitter, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeApiService } from '../recipe-api-service';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-user-account-page',
  templateUrl: './user-account-page.component.html',
  styleUrls: ['./user-account-page.component.css']
})
export class UserAccountPageComponent implements OnInit {

  public userApiService: UserApiService;
  public recipeApiService: RecipeApiService;
  
  currentUser: any;
  name:string;
  email:string;
  favoritelist:Array<string>;
  ssoId:string;
  listOfFavoritesAsRecipes:Array<any>;

  constructor(public router : Router, private auth: UserApiService, service: RecipeApiService) { 
    this.favoritelist = [];
    this.listOfFavoritesAsRecipes = [];
    this.userApiService = auth;
    this.recipeApiService = service;
    this.auth.getUserProfile().subscribe(async data => {
      this.currentUser = await JSON.parse(JSON.stringify(data));
      this.name = this.currentUser.displayName;
      this.email = this.currentUser.email;
      this.ssoId = this.currentUser.userId;
      this.populateFavoriteList();
    });
  }

  ngOnInit(): void {
  }

  populateFavoriteList() {
    let userInfo:any;
    this.auth.getSingleUser(this.ssoId).subscribe(async data => {
      userInfo = await JSON.parse(JSON.stringify(data));
      this.favoritelist = userInfo.favoriteList;
      let recipe:any;
      for(let recipeId of this.favoritelist) {
        this.recipeApiService.getRecipeById(recipeId).subscribe(async data => {
          recipe = await JSON.parse(JSON.stringify(data));
          this.listOfFavoritesAsRecipes.push(recipe);
        });
      }
    });
  }

  logMeOut(){
     this.userApiService.logout().subscribe(async res =>  {
      console.log('Successfully logged out');
      await this.router.navigate(['/home']);
      location.reload();
    });
  }

}
