import { Injectable } from '@angular/core';
import { Food } from './components/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  constructor() { }

  public getFoods(): Array<Food> {
    return this.foods;
  }
  public setFoods(food: Food): void {
    this.foods.push(food);
  }

  public foods: Array<Food> = [

    {
      title: 'Buffalo Chicken Salad',
      price: 7.50,
      cuisine: 'salad'
    },
    {
      title: 'Cheese',
      price: 12.95,
      cuisine: 'pizza'
    },
    {
      title: 'Teriyaki Chicken',
      price: 11.95,
      cuisine: 'chinese'
    },
    {
      title: 'Pepperoni',
      price: 13.50,
      cuisine: 'pizza'
    },
    {
      title: 'Hot Expresso',
      price: 4.25,
      cuisine: 'beverage'
    },
    {
      title: 'Classic Beef',
      price: 9.50,
      cuisine: 'burgers'
    },
    {
      title: 'Caesar',
      price: 12.95,
      cuisine: 'salad'
    },
    {
      title: 'BBQ Chicken',
      price: 5.50,
      cuisine: 'pizza'
    },
    {
      title: 'Hawaiian pizza',
      price: 9.50,
      cuisine: 'pizza'
    },
    {
      title: 'Canned Soda',
      price: 4.50,
      cuisine: 'beverage'
    },
    {
      title: 'General Tso Chicken',
      price: 10.50,
      cuisine: 'chinese'
    },
    {
      title: '2 Liter Soda',
      price: 6.25,
      cuisine: 'beverage'
    },
    {
      title: 'Bacon Cheese',
      price: 6.95,
      cuisine: 'burgers'
    },
    {
      title: 'Orange Chicken',
      price: 10.25,
      cuisine: 'chinese'
    },
    {
      title: 'Roast Pork Chow Mein',
      price: 7.95,
      cuisine: 'chinese'
    },
    {
      title: 'Chai Latte',
      price: 13.50,
      cuisine: 'beverage'
    },
    {
      title: 'Big Mini',
      price: 7.95,
      cuisine: 'burgers'
    },
    {
      title: 'Steak & Fries',
      price: 10.25,
      cuisine: 'burgers'
    },
    {

      title: 'Turkey Club',
      price: 8.25,
      cuisine: 'burgers'
    },
    {
      title: 'Iced Tea',
      price: 5.25,
      cuisine: 'beverage'
    },
    {
      title: 'Grilled Chicken Salad',
      price: 7.50,
      cuisine: 'salad'
    },
    {
      title: 'Seafood Lo Mein',
      price: 11.25,
      cuisine: 'chinese'
    },
    {
      title: 'Club Salad',
      price: 9.25,
      cuisine: 'salad'
    },
    {
      title: 'Small Chow Fun',
      price: 4.50,
      cuisine: 'chinese'
    },
    {
      title: 'Sweet & Sour Chicken',
      price: 11.95,
      cuisine: 'chinese'
    }
  ]






}
