import { Component, OnInit } from '@angular/core';

import { FoodsService } from '../foods.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],

})
export class AdminComponent implements OnInit {
  isAdmin:boolean = true
  itens;

  constructor(private foodsService: FoodsService) { }


  ngOnInit(): void {
    this.itens= this.foodsService.getFoods();
  }

  deleteItem(food){
    this.foodsService.deleteFoods(food);
  }

}
