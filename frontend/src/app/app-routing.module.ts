import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodFormComponent } from './admin/food-form/food-form.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'food-form',
        component: FoodFormComponent,
    },
    {
        path: 'admin',
        children: [
            {
                path: '',
                component: AdminComponent,
            },
            {
                path: 'food-form/:title',
                component: FoodFormComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
