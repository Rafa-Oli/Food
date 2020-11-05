import { Router } from "@angular/router";
import { StorageService } from "./../../components/service/storage.service";
import { Food, data } from "./../../components/food.model";
import { Component, OnInit } from "@angular/core";

const defaultTodoList = [];
const todoListStorageKey = "Todo_List";

@Component({
  selector: "app-burgers",
  templateUrl: "./burgers.component.html",
  styleUrls: ["./burgers.component.css"],
})
export class BurgersComponent implements OnInit {
  todoList: Food[]; // lista do que vai adicionar ao carrinho

  FoodItems; // mostra na tabela

  displayedColumns = ["title", "price", "cuisine", "action"];

  constructor(private storageService: StorageService, private router: Router) {
    this.todoList =
      storageService.getData(todoListStorageKey) || defaultTodoList;
  }

  ngOnInit(): void {
    this.FoodItems = data.food.filter((e) => e.cuisine === "burgers");
  }

  addToCart(food) {
    this.todoList.push(food);
    this.storageService.setData(todoListStorageKey, this.todoList);
    window.alert("Your product has been added to the cart!");
  }

  navigateToViewCart(): void {
    this.router.navigate(["cart"]);
  }
}
