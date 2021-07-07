import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import { FoodsService } from '../services/foods.service';
import { FoodCardComponent } from './food-card/food-card.component';
import { FoodListComponent } from './food-list/food-list.component';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
    declarations: [FoodCardComponent, FoodListComponent],
    imports: [CommonModule, FontAwesomeModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
    providers: [StorageService, FoodsService],
    exports: [FoodListComponent, FoodCardComponent],
})
export class FoodModule {}
