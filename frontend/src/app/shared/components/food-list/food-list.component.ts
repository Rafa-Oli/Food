import { Component, Input, OnInit } from '@angular/core';

import { FoodsService } from '../services/foods.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  @Input() itens: string;
 // isClient: boolean = true;

  @Input() isAdmin;
  @Input() isClient: boolean;
  constructor(private foodsService: FoodsService){ }

  ngOnInit(): void {
  }

  deleteItem(food) {
    this.foodsService.deleteFoods(food);
  }

}
