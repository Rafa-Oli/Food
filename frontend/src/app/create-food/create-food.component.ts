import { Component, OnInit } from '@angular/core';
import { Food } from '../components/food.model';
import { FoodsService } from '../foods.service';

@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.css'],

})

export class CreateFoodComponent implements OnInit {

  public title: string = ''
  public price: number;
  public dados: object;
  public cuisine;

  constructor(private foodsService: FoodsService) {}

  ngOnInit(): void {}


  atualizaDados(resposta: Event, type: string): void {
    if (type === 'title') {
      this.title = (<HTMLInputElement>resposta.target).value;

    } if (type === 'price') {
      this.price = +(<HTMLInputElement>resposta.target).value;

    } if (type === 'cuisine') {
      this.cuisine = (<HTMLInputElement>resposta.target).value;
    }
  }

  salvarDados() {
    let dados: Food = {
      title: this.title,
      price: this.price,
      cuisine: this.cuisine
    }
    this.foodsService.setFoods(dados);
  }
}
