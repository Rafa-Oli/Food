
import { PizzaComponent } from './views/pizza/pizza.component';
import { BeverageComponent } from './views/beverage/beverage.component';

import { SaladComponent } from './views/salad/salad.component';
import { BurgersComponent } from './views/burgers/burgers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './components/cart/cart/cart.component';
import { AllComponent } from './views/all/all.component';
import { ChineseComponent } from './views/chinese/chinese.component';

import { HomeComponent } from './views/home/home.component';
import { SearchComponent } from './components/search/search/search.component';
import { SearchGetComponent } from './components/search/search-get/search-get.component';

const routes: Routes = [
{
  path:"",
  component: HomeComponent
},{
  path:"search",
  component: SearchComponent
},{
  path:"search-get",
  component: SearchGetComponent 
},{
  path:"all",
  component: AllComponent
},{
  path:"cart",
  component: CartComponent
},{
  path:"chinese",
  component: ChineseComponent
},{
  path:"burgers",
  component: BurgersComponent
},{
  path:"salad",
  component: SaladComponent
},{
  path:"beverage",
  component: BeverageComponent
},{
  path:"pizza",
  component: PizzaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
