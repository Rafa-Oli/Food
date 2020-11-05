import { data } from './../../food.model';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  FoodItems = [];
  foodSearch: string;

  constructor() { }

  ngOnInit(): void { }

  search(): void {
    this.FoodItems = data.food.filter(e => e.title === this.foodSearch);
  }
}



