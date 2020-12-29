import { Component, OnInit } from '@angular/core';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { FoodsService } from 'src/app/foods.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  
  faHamburger = faHamburger;
  faBars = faBars;
  faAppleAlt = faAppleAlt;
  faCocktail = faCocktail;
  faPizzaSlice = faPizzaSlice;
  itens;
  itemSearch;

  constructor(private foodsService: FoodsService) { }

  foods(food: string){
    if (food === "all") {
      this.itens = this.foodsService.getFoods();
    } else {
      this.itens = this.foodsService.getFoods().filter((e) => e.cuisine === food);
    }
  }

  ngOnInit(): void { }

  search(foodSearch: string) {
    this.itemSearch = this.foodsService.foods.filter(el => el.title.toLowerCase().includes(foodSearch.toLowerCase()))
  }
}
