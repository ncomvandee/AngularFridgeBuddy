import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import {LoginPageComponent} from './login-page/login-page.component';
import { SearchByIngredientsComponent } from './search-by-ingredients/search-by-ingredients.component';
import { SearchByCuisineComponent } from './search-by-cuisine/search-by-cuisine.component';
import { ShowRecipeComponent } from './show-recipe/show-recipe.component';
import { UserAccountPageComponent } from './user-account-page/user-account-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'byIngredient', component: SearchByIngredientsComponent },
  { path: 'byCuisine', component: SearchByCuisineComponent },
  { path: 'showRecipe/:id', component: ShowRecipeComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'account', component: UserAccountPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
