import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  est = true;
  barca= false;
  milan=false

  constructor() { }

  ngOnInit(): void {
  }

  changeTeam(team) {
    this.est = false;
    this.barca= false;
    this.milan=false;

    if (team == 'est') {
      this.est = true;
    }
    if (team == 'barca') {
      this.barca = true;
    }
    if (team == 'milan') {
      this.milan = true;
    }
  }

}
