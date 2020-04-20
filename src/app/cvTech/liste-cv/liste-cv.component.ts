import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css']
})
export class ListeCvComponent implements OnInit {

  @Input() personnes: Personne[];
  @Output() selectedPersonneEmitToCV = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log("personnes list: ",this.personnes)
  }

  selectedPersonne(selectedPersonne) {
    this.selectedPersonneEmitToCV.emit(
      selectedPersonne
    )
  }

}
