import { Component, Input, OnInit, Output } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from '@angular/core';
import { Food } from '../../types/food';
import { StorageService } from '../../services/storage.service';

const defaultTodoList = [];
const todoListStorageKey = 'Todo_List';

@Component({
    selector: 'app-food-card',
    templateUrl: './food-card.component.html',
    styleUrls: ['./food-card.component.css'],
})
export class FoodCardComponent implements OnInit {
    @Output() public newItemEvent = new EventEmitter<any>();

    @Input() public isAdmin;

    @Input() public itens;

    @Input() public isClient;

    public faCartPlus = faCartPlus;

    public faPen = faPen;

    public faTrash = faTrash;

    public todoList: Food[];

    constructor(private storageService: StorageService) {
        this.todoList = storageService.getData(todoListStorageKey) || defaultTodoList;
    }

    public ngOnInit(): void {}

    public addToCart(food: Food): void {
        this.todoList.push(food);
        this.storageService.setData(todoListStorageKey, this.todoList);
        window.alert('Your product has been added to the cart!');
    }

    public deleteAdmin(food: Food): void {
        this.newItemEvent.emit(food);
    }
}
