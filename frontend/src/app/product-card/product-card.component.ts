import { Component, Input, OnInit} from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Food } from '../components/food.model';
import { StorageService } from '../components/service/storage.service';

const defaultTodoList = [];
const todoListStorageKey = "Todo_List";


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})


export class ProductCardComponent implements OnInit{
  @Input() itens;
  faCartPlus = faCartPlus;
  todoList: Food[];
 
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
    window.alert("Your product has been added to the cart!");
  }
}
