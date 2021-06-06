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
  // @Output() outToParent = new EventEmitter<string>();
  // @Input() loginStatus: string;
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
      // this.getFavoriteRecipes();
    });
  }

  ngOnInit(): void {
  }

  populateFavoriteList() {
    let userInfo:any;
    this.auth.getSingleUser(this.ssoId).subscribe(async data => {
      userInfo = await JSON.parse(JSON.stringify(data));
      this.favoritelist = userInfo.favoriteList;
      // console.warn("The favorite list contains: " + this.favoritelist);
      let recipe:any;
      // console.warn("Made it into the get Favorite Recipe!");
      // console.warn("The favorite list is: " + this.favoritelist);
      // console.warn("The favorite list is of type: " + typeof(this.favoritelist));
      for(let recipeId of this.favoritelist) {
        // console.warn("Made it into the for loop");
        // console.warn("The recipeid is: " + recipeId);
        this.recipeApiService.getRecipeById(recipeId).subscribe(async data => {
          recipe = await JSON.parse(JSON.stringify(data));
          this.listOfFavoritesAsRecipes.push(recipe);
          // console.warn(recipe);
          // console.warn(this.listOfFavoritesAsRecipes);
        });
      }
    });
  }

  // getFavoriteRecipes() {
  //   let recipe:any;
  //   console.warn("Made it into the get Favorite Recipe!");
  //   console.warn("The favorite list is: " + this.favoritelist);
  //   console.warn("The favorite list is of type: " + typeof(this.favoritelist));
  //   for(let recipeId of this.favoritelist) {
  //     console.warn("Made it into the for loop");
  //     console.warn("The recipeid is: " + recipeId);
  //     this.recipeApiService.getRecipeById(recipeId).subscribe(async data => {
  //       recipe = await JSON.parse(JSON.stringify(data));
  //       this.listOfFavoritesAsRecipes.push(recipe);
  //       console.warn(recipe);
  //       console.warn(this.listOfFavoritesAsRecipes);
  //     });
  //   }
  // }

  logMeOut(){
     this.userApiService.logout().subscribe(async res =>  {
      console.log('Successfully logged out');
      // this.outToParent.emit("false");
      // this.loginStatus = "false";
      await this.router.navigate(['/home']);
      location.reload();
    });
  }

}
