import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../../shared/components/food';
import { FoodsService } from '../../shared/components/services/foods.service';

@Component({
    selector: 'app-food-form',
    templateUrl: './food-form.component.html',
    styleUrls: ['./food-form.component.css'],
})
export class FoodFormComponent implements OnInit {
    public formulario: FormGroup;

    public food: Food;

    public isEdit = false;

    constructor(private foodsService: FoodsService, private formBuilder: FormBuilder, private route: ActivatedRoute) {}

    public ngOnInit(): void {
        //pegando parametro da url
        const title = this.route.snapshot.paramMap.get('title');
        this.food = this.foodsService.readByTitle(title); //fazendo o get

        //criando um novo food
        if (Object.entries(this.food).length === 0) {
            this.formulario = this.formBuilder.group({
                title: [''],
                price: [''],
                cuisine: [''],
            });
        } else {
            //update food
            this.isEdit = true;
            this.formulario = this.formBuilder.group({
                //setando valores originais para edicao
                title: [this.food[0].title],
                price: [this.food[0].price],
                cuisine: [this.food[0].cuisine],
            });
        }
    }

    public onSubmit(): void {
        let dados: Food = {
            title: this.formulario.controls['title'].value,
            price: this.formulario.controls['price'].value,
            cuisine: this.formulario.controls['cuisine'].value,
        };
        console.log(dados);
        this.foodsService.setFoods(dados);
        this.formulario.reset();
        // console.warn(this.formulario.controls['title'].value);
    }

    public onUpdate(): void {
        let dados: Food = {
            title: this.formulario.controls['title'].value,
            price: this.formulario.controls['price'].value,
            cuisine: this.formulario.controls['cuisine'].value,
        };

        this.foodsService.updateFood(dados, this.food);
        this.formulario.reset();
    }
}
