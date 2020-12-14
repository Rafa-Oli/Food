import { SearchComponent } from './components/search/search/search.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { MatButtonModule } from '@angular/material/button';

import {FormsModule} from '@angular/forms';
import{MatFormFieldModule} from '@angular/material/form-field';
import{ MatInputModule } from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';
import { SearchGetComponent } from './components/search/search-get/search-get.component';
import { AllComponent } from './views/all/all.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { StorageService } from './components/service/storage.service';

import { CartComponent } from './components/cart/cart/cart.component';
import { ChineseComponent } from './views/chinese/chinese.component';
import { BurgersComponent } from './views/burgers/burgers.component';
import { SaladComponent } from './views/salad/salad.component';
import { BeverageComponent } from './views/beverage/beverage.component';
import { PizzaComponent } from './views/pizza/pizza.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { Search2Component } from './search2/search2.component';
import { CategoriesComponent } from './categories/categories.component';
import { FoodsComponent } from './foods/foods.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    SearchComponent,
    SearchGetComponent, 
    AllComponent,
    CartComponent,
    ChineseComponent,
    BurgersComponent,
    SaladComponent,
    BeverageComponent,
    PizzaComponent,
    Search2Component,
    CategoriesComponent,
    FoodsComponent,

    
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    CommonModule,
    FontAwesomeModule
  
  ],
  providers: [
    
    StorageService,
    SearchGetComponent
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
