
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {AdminModule} from './admin/admin.module';
import { FoodModule } from './shared/food/food.module';
import { HomeModule } from './home/home.module';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CommonModule } from '@angular/common';


import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,


    MatToolbarModule,
    FormsModule ,
    FoodModule,
    AdminModule,
    HomeModule
  
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
