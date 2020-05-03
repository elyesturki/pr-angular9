import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { ActivatedRoute } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  personne: Personne;
  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log(params);
        this.cvService.getPersonneById(params.id).subscribe({
          next: (personne) => {
            this.personne = personne;
          }
        })
      }
    })
  }

}
