import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageService } from './services/storage.service';
import { FoodsService } from './services/foods.service';
import { FoodCardComponent } from './food-card/food-card.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FoodCardComponent,
    FoodListComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule,
   ReactiveFormsModule,
    FormsModule,
  ],
  providers: [StorageService, FoodsService],
  exports: [FoodListComponent, FoodCardComponent]
})
export class FoodModule { }
