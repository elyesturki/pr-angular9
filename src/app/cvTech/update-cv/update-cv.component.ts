import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-update-cv',
  templateUrl: './update-cv.component.html',
  styleUrls: ['./update-cv.component.css']
})
export class UpdateCvComponent implements OnInit {

  personne: Personne = null;
  constructor( private activatedRoute: ActivatedRoute, private cvService: CvService, private router: Router) { }

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

  updatePersonne() {
    this.cvService.updatePersonne(this.personne).subscribe({
      next: (reponse) => {
        const link = ['cv'];
        this.router.navigate(link)
      },
      error: (err) => console.log(err.message),
      complete: () => console.log('Observer got a complete update')
    }

    );
  }

}
