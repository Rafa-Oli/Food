import { data, Food } from "./../../components/food.model";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StorageService } from "./../../components/service/storage.service";

const todoListStorageKey = "Todo_List";
const defaultTodoList = [];

@Component({
  selector: "app-all",
  templateUrl: "./all.component.html",
  styleUrls: ["./all.component.css"],
})
export class AllComponent implements OnInit {
  todoList: Food[];

  FoodItems = data.food;

  displayedColumns = ["title", "price", "cuisine", "action"];

  constructor(private storageService: StorageService, private router: Router) {
    this.todoList =
      storageService.getData(todoListStorageKey) || defaultTodoList;
  }
  ngOnInit(): void {}

  addToCart(food) {
    this.todoList.push(food);
    this.storageService.setData(todoListStorageKey, this.todoList);
    window.alert("Your product has been added to the cart!");
  }

  navigateToViewCart(): void {
    this.router.navigate(["cart"]);
  }
}
