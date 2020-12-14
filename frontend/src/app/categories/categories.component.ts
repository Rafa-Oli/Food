import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { Food, data } from '../components/food.model';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  categorie: string
  faHamburger = faHamburger;
  faBars = faBars;
  faAppleAlt = faAppleAlt;
  faCocktail = faCocktail;
  faPizzaSlice = faPizzaSlice;

  FoodItems:any;
  
  
  constructor() {}
  
  
  ngOnInit(): void {
  }

  
  exibirTabela(food: string) {
    this.newItemEvent.emit(food);
    console.log(food)
  }

/*
  exibirTabela(food: String){
    if(food === "all"){
      this.FoodItems = data.food;

    }else{
      this.FoodItems = data.food.filter((e) => e.cuisine === food);
    }
    console.log(this.categorie)
  }
  */
}
