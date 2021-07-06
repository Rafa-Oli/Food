import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Food } from '../shared/components/food';
import { FoodsService } from '../shared/components/services/foods.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    public isAdmin = false;

    public isClient = true;

    public searchForm = new FormControl('');

    public itens: Food[];

    public itemSearch;

    public foodSearch: string;

    constructor(private foodsService: FoodsService) {}

    public ngOnInit(): void {
        this.searchForm.valueChanges.subscribe((value) => {
            this.search(value);
        });
    }

    public getFoods(food: string): void {
        this.itens =
            food === 'all'
                ? this.foodsService.getFoods()
                : this.foodsService.getFoods().filter((e) => e.cuisine === food);
    }

    public search(foodSearch: string): void {
        this.itemSearch = this.foodsService.foods.filter((el) =>
            el.title.toLowerCase().includes(foodSearch.toLowerCase()),
        );
    }
}
