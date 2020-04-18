import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  @Input() filsProperty;
  @Input() filsProperty2;

  /** from child to parent */
  tabEnvoyerAuParent = [{val:1},{val:2},{val:3},{val:4}]
  @Output() sendRequestToData = new EventEmitter();
  sendEvent() {
    this.sendRequestToData.emit(
      this.tabEnvoyerAuParent
     // 'message envoyé vers le parent'
    );
  }
  /***************** */
  constructor() { }

  ngOnInit(): void {
    console.log("filsProperty: voici le contenu de la variable color: ",this.filsProperty);
    console.log("filsProperty2: voici le contenu de la variable color2: ",this.filsProperty2);
  }



}
