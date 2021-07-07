import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [CartComponent, CategoriesComponent, HomeComponent],
    imports: [ReactiveFormsModule, CommonModule, FormsModule, SharedModule, FontAwesomeModule, AppRoutingModule],
})
export class HomeModule {}
