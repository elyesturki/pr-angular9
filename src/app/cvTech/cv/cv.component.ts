import { Component, OnInit } from '@angular/core';
import { Personne } from '../../Model/Personne';
import { PremierService } from 'src/app/premier.service';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes: Personne [];

  selectedPersonne: Personne;

  constructor( private premierService: PremierService, private cvService: CvService) { }

  ngOnInit(): void {
    this.cvService.getPersonnes().subscribe({
      next: personnes => {
        this.personnes = personnes;
      },
      error: err => {
        console.log("probleme d'accès à l'API - ", err);
        this.personnes = this.cvService.getFakePersonnes();
      },
      complete: () => {
        console.log("Chargement observable API personne terminé");
      }
    });
    //console.log(this.personnes)
    this.premierService.logger(this.personnes);
    this.premierService.addData('data from cv compnenent');
  }

  selectedPersonneFromList(personneFromList) {
    this.selectedPersonne = personneFromList;
  }

}
