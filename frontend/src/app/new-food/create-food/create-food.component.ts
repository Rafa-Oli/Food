import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Food } from '../../shared/food.model';
import { FoodsService } from '../../foods.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.css'],
})

export class CreateFoodComponent implements OnInit {

  formulario: FormGroup;
  public dados: object;
  food: Food;
  isEdit = false

  constructor(private foodsService: FoodsService, private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    //pegando parametro da url
    const title = this.route.snapshot.paramMap.get('title')
    this.food = this.foodsService.readByTitle(title) //fazendo o get


    if (Object.entries(this.food).length === 0) {
      this.formulario = this.formBuilder.group({
        title: [''],
        price: [''],
        cuisine: [''],
      });

    } else {
      this.isEdit= true;
      this.formulario = this.formBuilder.group({ //setando valores para edicao
        title: [this.food[0].title],
        price: [this.food[0].price],
        cuisine: [this.food[0].cuisine],
      });

    }
  }
  onSubmit() {
    let dados: Food = {
      title: this.formulario.controls['title'].value,
      price: this.formulario.controls['price'].value,
      cuisine: this.formulario.controls['cuisine'].value
    }
    this.foodsService.setFoods(dados);
    this.formulario.reset()
    // console.warn(this.formulario.controls['title'].value);
  }

  onUpdate(){
    let dados: Food = {
      title: this.formulario.controls['title'].value,
      price: this.formulario.controls['price'].value,
      cuisine: this.formulario.controls['cuisine'].value
    }

    this.foodsService.updateFood(dados, this.food)
    this.formulario.reset()
   

  }
}
