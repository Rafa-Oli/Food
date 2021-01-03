import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FoodFormComponent} from './food-form/food-form.component';
import {AdminComponent} from './admin.component';

import { FoodModule } from '../shared/food/food.module'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
   FoodFormComponent,
   AdminComponent,
   
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    FoodModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class AdminModule { }
