import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-by-cuisine',
  templateUrl: './search-by-cuisine.component.html',
  styleUrls: ['./search-by-cuisine.component.css']
})
export class SearchByCuisineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cuisine: string = '';
  searchRecipe(){
    console.log("XXXXXXXX: ", this.cuisine);
  }

}
