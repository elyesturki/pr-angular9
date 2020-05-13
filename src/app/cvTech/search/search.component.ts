import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from '../cv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('inputSearch') inputSearch: ElementRef;

  searchResult: Personne[];
  constructor( private cvService: CvService, private router: Router) { }

  ngOnInit(): void {
    this.searchResult = [];
  }

  search(txtSearch: string): void {
    let name = txtSearch;
    name = name.trim();
    if (name.length) {
      this.cvService.findByName(name).subscribe({
        next: (personnes: any) => {
          console.log("personnes trouvés:", personnes);
          this.searchResult = personnes;
        }
      })
    } else {
      this.searchResult = [];
    }

  }

  selectPersonne(personne: Personne) {
    this.inputSearch.nativeElement.value = "";
    this.searchResult = [];
    const link = ['cv', personne.id];
    this.router.navigate(link);
  }

}
