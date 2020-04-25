import { Component, OnInit, Input } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {

  @Input() personne : Personne;

  selectedPersonne : Personne = {
    id: 1,
    name: "Turki",
    firstname: "Elyes",
    age: 39,
    path: "rotating_card_profile1.png",
    cin: 1,
    job: "Consltant technique",
  };

  constructor(private embaucheService: EmbaucheService) { }

  ngOnInit(): void {

  }

  embaucher() {
    this.embaucheService.embaucher(this.personne)
  }

}
