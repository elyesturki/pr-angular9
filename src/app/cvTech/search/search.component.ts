import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResult: Personne[];
  constructor( private cvService: CvService) { }

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
    console.log(personne);
  }

}
