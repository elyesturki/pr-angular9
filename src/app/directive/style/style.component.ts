import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  @Input() color = 'white';
  @Input() bgColor = 'lightblue';

  size = '10px';

  constructor() { }

  ngOnInit(): void {
  }

  changeSize(size) {
    this.size = size + 'px';
  }

}
