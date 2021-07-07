import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StorageService } from './services/storage.service';
import { FoodsService } from './services/foods.service';
import { FoodCardComponent } from './components/food-card/food-card.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { NavComponent } from './components/navbar/nav.component';

@NgModule({
    declarations: [FoodCardComponent, FoodListComponent, NavComponent],
    imports: [CommonModule, FontAwesomeModule, AppRoutingModule, ReactiveFormsModule, FormsModule, MatToolbarModule],
    providers: [StorageService, FoodsService],
    exports: [FoodListComponent, FoodCardComponent, NavComponent],
})
export class SharedModule {}
