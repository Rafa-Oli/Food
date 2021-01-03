import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { FoodsService } from '../shared/food/services/foods.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],

})
export class AdminComponent implements OnInit {
  isAdmin:boolean = true
  isClient:boolean = false
  faPlus = faPlus;
  itens;

  constructor(private foodsService: FoodsService) { }


  ngOnInit(): void {
    this.itens= this.foodsService.getFoods();
  }

  deleteItem(food){
    this.foodsService.deleteFoods(food);
  }

 

}
