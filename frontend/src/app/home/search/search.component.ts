import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';





@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  @Output() newFoodEvent = new EventEmitter<string>();

  public search: string = ''
  searchForm = new FormControl('');

  
  constructor() { }

  ngOnInit(): void {
    
    //observable : valueChanges
    this.searchForm.valueChanges
      .subscribe(value =>{
        this.search = value;
        this.newFoodEvent.emit(this.search)
        })
  }
  /*
  atualizaSearch(resposta: Event): void {
    this.search = (<HTMLInputElement>resposta.target).value

  }
  */
  /*
  verificarResposta(): void {
    this.newFoodEvent.emit(this.search)
   // console.log(this.search2)
  }
*/
}
