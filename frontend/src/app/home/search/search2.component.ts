import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FoodsComponent } from '../foods/foods.component';

@Component({
  selector: 'app-search2',
  templateUrl: './search2.component.html',
  styleUrls: ['./search2.component.css']
})
export class Search2Component implements OnInit {
  @Output() newFoodEvent = new EventEmitter<string>();
  public search: string = ''

  constructor() { }

  ngOnInit(): void {
  }
  atualizaSearch(resposta: Event): void {
    this.search = (<HTMLInputElement>resposta.target).value
  }
  verificarResposta(): void {
    this.newFoodEvent.emit(this.search)
   // console.log(this.search)
  }

}
