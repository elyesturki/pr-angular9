import { Component, OnInit } from '@angular/core';
import { PremierService } from 'src/app/premier.service';
import { Router } from '@angular/router';

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

  constructor( private premierService: PremierService, private router: Router) { }

  ngOnInit(): void {
  }

  loggerMesData() {
    this.premierService.logger('test');
  }

  goToCv() {
    const link = ['cv'];
    this.router.navigate(link);
  }

  // changeColor(input) {
  //   console.log("inpuColor: ", input.value);
  //   this.color = input.value;
  //   input.value = "";
  // }

}
