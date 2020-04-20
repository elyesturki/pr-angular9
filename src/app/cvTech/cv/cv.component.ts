import { Component, OnInit } from '@angular/core';
import { Personne } from '../../Model/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  id: number;
  name: string;
  firstname: string;
  age: number;
  path: string;
  cin: number;
  job: string;
  personnes: Personne [];

  constructor() { }

  ngOnInit(): void {
    this.personnes = [
     new Personne(this.id= 1,this.name='Turki',this.firstname='Elyes',this.age= 39,this.path='rotating_card_profile1.png',this.cin=1,this.job='Consltant technique'),
     new Personne (this.id= 2,this.name='Ronaldo',this.firstname='Cristiano',this.age= 35,this.path='rotating_card_profile2.png',this.cin=2,this.job='Footballeur'),
    ];
    console.log(this.personnes)
  }

}
