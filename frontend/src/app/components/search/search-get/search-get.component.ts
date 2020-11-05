
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-get',
  templateUrl: './search-get.component.html',
  styleUrls: ['./search-get.component.css']
})

export class SearchGetComponent implements OnInit {

  @Input() itens: any;

  constructor() { }

  ngOnInit(): void { }
}




