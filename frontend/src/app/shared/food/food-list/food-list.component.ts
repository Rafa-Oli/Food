import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  @Input() itens: string;
  isClient: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
