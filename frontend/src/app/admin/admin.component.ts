import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Food } from '../shared/components/food';

import { FoodsService } from '../shared/components/services/foods.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
    public isAdmin = true;

    public isClient = false;

    public faPlus = faPlus;

    public itens;

    constructor(private foodsService: FoodsService) {}

    public ngOnInit(): void {
        this.itens = this.foodsService.getFoods();
    }

    public deleteItem(food: Food): void {
        this.foodsService.deleteFoods(food);
    }
}
