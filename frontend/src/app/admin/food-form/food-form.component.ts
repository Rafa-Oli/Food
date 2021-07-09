import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../../shared/types/food';
import { FoodsService } from '../../shared/services/foods.service';

@Component({
    selector: 'app-food-form',
    templateUrl: './food-form.component.html',
    styleUrls: ['./food-form.component.css'],
})
export class FoodFormComponent implements OnInit {
    public foodForm: FormGroup;

    public food: Food;

    public isEdit = false;

    constructor(
        private readonly foodsService: FoodsService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
    ) {}

    public ngOnInit(): void {
        const getTitle = this.route.snapshot.paramMap.get('title');
        this.food = this.foodsService.getByTitle(getTitle);

        this.createForm();
        if (getTitle) {
            this.isEdit = true;
            this.foodForm.patchValue({ title: this.food.title, price: this.food.price, cuisine: this.food.cuisine });
        }
    }

    public onSubmit(): void {
        this.food ? this.onUpdate() : this.foodsService.setFoods(this.foodForm.value);

        this.foodForm.reset();
    }

    public onUpdate(): void {
        this.foodsService.updateFood(this.foodForm.value, this.food);
        this.foodForm.reset();
    }

    public createForm(): void {
        this.foodForm = this.formBuilder.group({
            title: [''],
            price: [''],
            cuisine: [''],
        });
    }
}
