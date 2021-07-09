import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
    @Output() public newItemEvent = new EventEmitter<string>();

    public faHamburger = faHamburger;

    public faBars = faBars;

    public faAppleAlt = faAppleAlt;

    public faCocktail = faCocktail;

    public faPizzaSlice = faPizzaSlice;

    constructor() {}

    public ngOnInit(): void {}

    public showTable(food: string): void {
        this.newItemEvent.emit(food);
    }
}
