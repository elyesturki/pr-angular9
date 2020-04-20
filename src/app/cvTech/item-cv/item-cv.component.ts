import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {

  @Input() personne : Personne;
  @Output() selectedPersonneEmit = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    console.log("personne item: ",this.personne)
  }

  selectPersonne() {
    // emmetre un evenement et injecter la personne
    this.selectedPersonneEmit.emit(
      this.personne
    )
  }

}
