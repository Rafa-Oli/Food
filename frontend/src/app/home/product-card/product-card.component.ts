import { Component, Input, OnInit, Output} from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Food } from '../../shared/food.model';
import { StorageService } from '../../service/storage.service';
import { EventEmitter } from '@angular/core';

const defaultTodoList = [];
const todoListStorageKey = "Todo_List";


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})


export class ProductCardComponent implements OnInit{

  @Output() newItemEvent = new EventEmitter<Food>();
  
  @Input() isAdmin;
  @Input() itens;
  @Input() isClient;

  faCartPlus = faCartPlus;
  faPen = faPen;
  faTrash = faTrash;
  todoList: Food[];

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

  deleteAdmin(food: Food){
    console.log('dentro do card')
    this.newItemEvent.emit(food);
  }


}
