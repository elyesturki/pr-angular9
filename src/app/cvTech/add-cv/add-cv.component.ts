import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {

  errorMessage = "";
  successMessage = "";
  constructor( private cvService: CvService, private router: Router) { }

  ngOnInit(): void {
  }

  addPersonne(formulaire) {
    this.cvService.addPersonne(formulaire.value).subscribe({
      next: (reponse) => {
        this.successMessage = "Personne ajoutée avec Succès";
        const link = ['cv'];
        setTimeout(() => {
          this.router.navigate(link)
        }, 1500);
      },
      error: (error) => {
        this.errorMessage = "Problème de connection serveur lors de l'ajout de personne";
        console.error('probleme de connection serveur pour ajout personne')
      },
      complete: () => console.log("add personne complete")
    })
  }

}
