import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import {LoginPageComponent} from './login-page/login-page.component';
import { SearchByIngredientsComponent } from './search-by-ingredients/search-by-ingredients.component';
import { SearchByCuisineComponent } from './search-by-cuisine/search-by-cuisine.component';
import { ShowRecipeComponent } from './show-recipe/show-recipe.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'byIngredient', component: SearchByIngredientsComponent },
  { path: 'byCuisine', component: SearchByCuisineComponent },
  { path: 'showRecipe', component: ShowRecipeComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
