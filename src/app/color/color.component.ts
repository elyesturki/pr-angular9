import { Component, OnInit } from '@angular/core';
import { PremierService } from 'src/app/premier.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(
    private premierService: PremierService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
       // this.color = params['default'] // cela marche avec les parametres appelés;
       this.color = params.default;
        console.log('Observer got a next value param: ', params)
      },
      (err) => console.error('Observer got an error: ', err),
      () => console.log('Observer got a complete notification')
    )
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
