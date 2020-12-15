
import { Food } from './../../food.model';
import { StorageService } from './../../service/storage.service';
import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const todoListStorageKey = 'Todo_List';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  faTrash= faTrash;
  items: Food[];

  displayedColumns = ['title', 'price', 'cuisine', 'action']

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    
  this.items = this.storageService.getData(todoListStorageKey);
   }

  closeOrder() {
    window.alert('Thank you for buying!');
  }

  delete(food: Food) {
    const index = this.items.indexOf(food);
    this.items.splice(index, 1);
    console.log(this.items)
    this.storageService.setData(todoListStorageKey, this.items);
    
  }


  
}
