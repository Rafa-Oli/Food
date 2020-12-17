
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart/cart.component';
import { HomeComponent } from './views/home/home.component';
import{ CreateFoodComponent } from './create-food/create-food.component';

const routes: Routes = [
{
  path:"",
  component: HomeComponent
},{
  path:"cart",
  component: CartComponent
 },{
    path: "create-food",
    component: CreateFoodComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
