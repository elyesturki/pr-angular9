import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResult: Personne[];
  constructor() { }

  ngOnInit(): void {
    this.searchResult = [];
  }

  search(txtSearch: string): void {
    console.log(txtSearch);
  }

  selectPersonne(personne: Personne) {
    console.log(personne);
  }

}
