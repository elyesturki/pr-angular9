import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  @Input() filsProperty;
  @Input() filsProperty2;


  constructor() { }

  ngOnInit(): void {
    console.log("filsProperty: voici le contenu de la variable color: ",this.filsProperty);
    console.log("filsProperty2: voici le contenu de la variable color2: ",this.filsProperty2);
  }

}
