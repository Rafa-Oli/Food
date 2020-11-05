import { Food, data } from "./../../components/food.model";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StorageService } from "./../../components/service/storage.service";

const defaultTodoList = [];
const todoListStorageKey = "Todo_List";

@Component({
  selector: "app-chinese",
  templateUrl: "./chinese.component.html",
  styleUrls: ["./chinese.component.css"],
})
export class ChineseComponent implements OnInit {
  todoList: Food[]; // lista do que vai adicionar ao carrinho

  FoodItems; // mostra na tabela

  displayedColumns = ["title", "price", "cuisine", "action"];

  constructor(private storageService: StorageService, private router: Router) {
    this.todoList =
      storageService.getData(todoListStorageKey) || defaultTodoList;
  }

  ngOnInit(): void {
    this.FoodItems = data.food.filter((e) => e.cuisine === "chinese");
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
