import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Food } from '../../shared/food.model';
import { FoodsService } from '../../foods.service';

@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.css'],

})

export class CreateFoodComponent implements OnInit {

    formulario: FormGroup;
    public dados: object;

  constructor(private foodsService: FoodsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      title: [''],
      price: [''],
      cuisine: [''],
    });
  }

  onSubmit() {
    let dados: Food = {
      title: this.formulario.controls['title'].value,
      price: this.formulario.controls['price'].value,
      cuisine: this.formulario.controls['cuisine'].value
    }
    this.foodsService.setFoods(dados);
   // console.warn(this.formulario.controls['title'].value);
  }
}
