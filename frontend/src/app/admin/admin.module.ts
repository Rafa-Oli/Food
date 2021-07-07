import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FoodFormComponent } from './food-form/food-form.component';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';

import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [FoodFormComponent, AdminComponent],
    imports: [FontAwesomeModule, CommonModule, SharedModule, ReactiveFormsModule, FormsModule, AppRoutingModule],
})
export class AdminModule {}
