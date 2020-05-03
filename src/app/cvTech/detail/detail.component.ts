import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    private activatedRoute: ActivatedRoute,
    private router: Router
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

  deletePersonne() {
    this.cvService.deletePersonne(this.personne.id).subscribe({
      next: (response) => {
        const link = ['cv'];
        this.router.navigate(link);
      },
      error: (err) => console.log("Erreur lors de la supression: ",err)
    })
  }

}
