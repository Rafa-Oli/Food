import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Food } from '../../shared/types/food';
import { StorageService } from '../../shared/services/storage.service';

const todoListStorageKey = 'Todo_List';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
    public faShoppingCart = faShoppingCart;

    public faTrash = faTrash;

    public items: Food[];

    public displayedColumns = ['title', 'price', 'cuisine', 'action'];

    constructor(private storageService: StorageService) {}

    public ngOnInit(): void {
        this.items = this.storageService.getData(todoListStorageKey);
    }

    public closeOrder(): void {
        window.alert('Thank you for buying!');
    }

    public delete(food: Food): void {
        const index = this.items.indexOf(food);
        this.items.splice(index, 1);
        this.storageService.setData(todoListStorageKey, this.items);
    }
}
