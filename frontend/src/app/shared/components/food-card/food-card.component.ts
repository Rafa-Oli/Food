import { Component, Input, OnInit, Output} from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Food } from '../food';
import { StorageService } from '../services/storage.service';
import { EventEmitter } from '@angular/core';

const defaultTodoList = [];
const todoListStorageKey = "Todo_List";


@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css']
})


export class FoodCardComponent implements OnInit{

  @Output() newItemEvent = new EventEmitter<any>();
  

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

  deleteAdmin(food){
    this.newItemEvent.emit(food);
  }

}
