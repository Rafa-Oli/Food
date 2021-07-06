import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../food';

import { FoodsService } from '../services/foods.service';

@Component({
    selector: 'app-food-list',
    templateUrl: './food-list.component.html',
    styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent implements OnInit {
    @Input() public itens: string;

    @Input() public isAdmin;

    @Input() public isClient: boolean;

    constructor(private foodsService: FoodsService) {}

    public ngOnInit(): void {}

    public deleteItem(food: Food): void {
        this.foodsService.deleteFoods(food);
    }
}
