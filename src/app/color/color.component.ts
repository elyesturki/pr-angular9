import { Component, OnInit } from '@angular/core';
import { PremierService } from 'src/app/premier.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers: [PremierService]
})
export class ColorComponent implements OnInit {
  color= "red";
  color2="green";

  /**data from fils */
  processReq (message: any) {
    console.log(message);
  }

  constructor( private premierService: PremierService) { }

  ngOnInit(): void {
  }

  loggerMesData() {
    this.premierService.logger('test');
  }

  // changeColor(input) {
  //   console.log("inpuColor: ", input.value);
  //   this.color = input.value;
  //   input.value = "";
  // }

}
