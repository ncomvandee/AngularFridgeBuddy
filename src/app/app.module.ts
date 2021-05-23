import { HttpClientModule } from '@angular/common/http';
// import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchByIngredientsComponent } from './search-by-ingredients/search-by-ingredients.component';
import { SearchByCuisineComponent } from './search-by-cuisine/search-by-cuisine.component';
import { ShowRecipeComponent } from './show-recipe/show-recipe.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { UserAccountPageComponent } from './user-account-page/user-account-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchByIngredientsComponent,
    SearchByCuisineComponent,
    ShowRecipeComponent,
    LoginPageComponent,
    UserAccountPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    MatCardModule,
    YouTubePlayerModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
