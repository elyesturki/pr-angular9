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
    this.personnes = this.cvService.getPersonnes();
    //console.log(this.personnes)
    this.premierService.logger(this.personnes);
    this.premierService.addData('data from cv compnenent');
  }

  selectedPersonneFromList(personneFromList) {
    this.selectedPersonne = personneFromList;
  }

}
