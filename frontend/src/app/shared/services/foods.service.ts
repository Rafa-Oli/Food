import { Injectable } from '@angular/core';
import { Food } from '../types/food';

@Injectable({
    providedIn: 'root',
})
export class FoodsService {
    getFoodAdmin;

    update;

    constructor() {}

    public getFoods(): Array<Food> {
        return this.foods;
    }

    public setFoods(food: Food): void {
        this.foods.push(food);
    }

    public deleteFoods(food: Food): void {
        this.foods.splice(this.foods.indexOf(food), 1);
    }

    public readByTitle(food: string): Food {
        this.getFoodAdmin = this.foods.filter((e) => e.title === food);
        return this.getFoodAdmin;
    }

    public updateFood(foodUpdate: Food, foodOrigin: Food): void {
        this.update = this.foods
            .map(function (e) {
                return e.title;
            })
            .indexOf(foodOrigin[0].title);
        this.foods[this.update] = foodUpdate;
    }

    public foods: Array<Food> = [
        {
            title: 'Buffalo Chicken Salad',
            price: 7.5,
            cuisine: 'salad',
        },
        {
            title: 'Cheese',
            price: 12.95,
            cuisine: 'pizza',
        },
        {
            title: 'Teriyaki Chicken',
            price: 11.95,
            cuisine: 'chinese',
        },
        {
            title: 'Pepperoni',
            price: 13.5,
            cuisine: 'pizza',
        },
        {
            title: 'Hot Expresso',
            price: 4.25,
            cuisine: 'beverage',
        },
        {
            title: 'Classic Beef',
            price: 9.5,
            cuisine: 'burgers',
        },
        {
            title: 'Caesar',
            price: 12.95,
            cuisine: 'salad',
        },
        {
            title: 'BBQ Chicken',
            price: 5.5,
            cuisine: 'pizza',
        },
        {
            title: 'Hawaiian pizza',
            price: 9.5,
            cuisine: 'pizza',
        },
        {
            title: 'Canned Soda',
            price: 4.5,
            cuisine: 'beverage',
        },
        {
            title: 'General Tso Chicken',
            price: 10.5,
            cuisine: 'chinese',
        },
        {
            title: '2 Liter Soda',
            price: 6.25,
            cuisine: 'beverage',
        },
        {
            title: 'Bacon Cheese',
            price: 6.95,
            cuisine: 'burgers',
        },
        {
            title: 'Orange Chicken',
            price: 10.25,
            cuisine: 'chinese',
        },
        {
            title: 'Roast Pork Chow Mein',
            price: 7.95,
            cuisine: 'chinese',
        },
        {
            title: 'Chai Latte',
            price: 13.5,
            cuisine: 'beverage',
        },
        {
            title: 'Big Mini',
            price: 7.95,
            cuisine: 'burgers',
        },
        {
            title: 'Steak & Fries',
            price: 10.25,
            cuisine: 'burgers',
        },
        {
            title: 'Turkey Club',
            price: 8.25,
            cuisine: 'burgers',
        },
        {
            title: 'Iced Tea',
            price: 5.25,
            cuisine: 'beverage',
        },
        {
            title: 'Grilled Chicken Salad',
            price: 7.5,
            cuisine: 'salad',
        },
        {
            title: 'Seafood Lo Mein',
            price: 11.25,
            cuisine: 'chinese',
        },
        {
            title: 'Club Salad',
            price: 9.25,
            cuisine: 'salad',
        },
        {
            title: 'Small Chow Fun',
            price: 4.5,
            cuisine: 'chinese',
        },
        {
            title: 'Sweet & Sour Chicken',
            price: 11.95,
            cuisine: 'chinese',
        },
    ];
}
