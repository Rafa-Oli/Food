

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { StorageService } from './service/storage.service';

import { CartComponent } from './home/cart/cart/cart.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { Search2Component } from './home/search/search2.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { FoodsComponent } from './home/foods/foods.component';
import { ProductListComponent } from './home/product-list/product-list.component';
import { ProductCardComponent } from './home/product-card/product-card.component';
import { CreateFoodComponent } from './new-food/create-food/create-food.component';
import { NavComponent } from './components/nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
  
    HomeComponent,
    CartComponent,
    Search2Component,
    CategoriesComponent,
    FoodsComponent,
    ProductListComponent,
    ProductCardComponent,
    CreateFoodComponent,
    NavComponent,
    AdminComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatToolbarModule,
    FormsModule 
  
  ],
  providers: [
    StorageService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
