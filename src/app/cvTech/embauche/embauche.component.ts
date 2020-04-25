import { EmbaucheService } from './../embauche.service';
import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
  personnes: Personne [];
  constructor( private embaucheService: EmbaucheService) { }

  ngOnInit(): void {
    this.personnes = this.embaucheService.getEmbauchees();
    console.log('Personnes embochés: ', this.personnes);
  }
}
