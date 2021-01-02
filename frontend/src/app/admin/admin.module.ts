import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FoodFormComponent} from './food-form/food-form.component';
import {AdminComponent} from './admin.component';

import { FoodModule } from '../shared/food/food.module'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
   FoodFormComponent,
   AdminComponent,
   
  ],
  imports: [
    CommonModule,
    FoodModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class AdminModule { }
