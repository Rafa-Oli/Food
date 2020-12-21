
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CreateFoodComponent } from './new-food/create-food/create-food.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }, {
    path: "create-food",
    component: CreateFoodComponent
  },{
    path: "admin",
    children: [
      {
        path: '',
        component: AdminComponent
      },{
        path:'create-food/:title',
        component:CreateFoodComponent
      }
    ]
  }
];             

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
