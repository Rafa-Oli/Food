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
    title: string;

  constructor(private foodsService: FoodsService, private formBuilder: FormBuilder,private route: ActivatedRoute) { }

  ngOnInit(): void {

    const title = this.route.snapshot.paramMap.get('title')
    this.food = this.foodsService.readByTitle(title)
    console.log('item',this.food.title)
    this.title = this.food.title

    console.log('ttttt',this.title)
   if(this.title === ""){
   
console.log('errrroooo')
     this.formulario = this.formBuilder.group({
       title: [''],
       price: [''],
       cuisine: [''],
     });

   }else{
     this.formulario = this.formBuilder.group({
       title: [''],
       price: [this.food.price],
       cuisine: [this.food.cuisine],
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
}
