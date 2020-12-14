import { Component, OnInit } from '@angular/core';
import { data, Food } from "./../components/food.model";
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Input } from '@angular/core';
import { StorageService } from '../components/service/storage.service';

const defaultTodoList = [];
const todoListStorageKey = "Todo_List";


@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
  @Input() itens: string;

  todoList: Food[];
  faCartPlus = faCartPlus;
  FoodItems;

  constructor(private storageService: StorageService) {
    this.todoList =
    storageService.getData(todoListStorageKey) || defaultTodoList;
  }
  
  ngOnInit(): void {

  }

  addToCart(food) {
    this.todoList.push(food);
    this.storageService.setData(todoListStorageKey, this.todoList);
    console.log(food)
    window.alert("Your product has been added to the cart!");
  }



}
