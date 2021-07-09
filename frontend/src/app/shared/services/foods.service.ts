import { Injectable } from '@angular/core';
import { data, Food } from '../types/food';

@Injectable({
    providedIn: 'root',
})
export class FoodsService {
    public getFoodAdmin: Food[];

    public indexFoodForUpdate: number;

    public foods: Food[] = data;

    constructor() {}

    public getFoods(): Food[] {
        return this.foods;
    }

    public setFoods(food: Food): void {
        this.foods.push(food);
    }

    public deleteFoods(food: Food): void {
        this.foods.splice(this.foods.indexOf(food), 1);
    }

    public getByTitle(food: string): Food {
        this.getFoodAdmin = this.foods.filter((e) => e.title === food);
        return this.getFoodAdmin[0];
    }

    public updateFood(foodUpdate: Food, foodOrigin: Food): void {
        this.indexFoodForUpdate = this.foods
            .map(function (e) {
                return e.title;
            })
            .indexOf(foodOrigin.title);
        this.foods[this.indexFoodForUpdate] = foodUpdate;
    }
}
