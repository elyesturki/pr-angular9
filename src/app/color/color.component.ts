import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color= "red";
  color2="green";

  /**data from fils */
  processReq (message: any) {
    console.log(message);
  }

  constructor() { }

  ngOnInit(): void {
  }

  // changeColor(input) {
  //   console.log("inpuColor: ", input.value);
  //   this.color = input.value;
  //   input.value = "";
  // }

}
