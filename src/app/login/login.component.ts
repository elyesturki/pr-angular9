import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authentificationServiver: AuthentificationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login(credentials) {
    // console.log("formulaire-credentials: ", credentials)
    this.authentificationServiver.login(credentials).subscribe({
      next: (reponse: any) => {
        console.log("reponse: ",reponse);
        let token = reponse.id;
        localStorage.setItem('token', token);

        const link = ['cv'];
        this.router.navigate(link);
      },
      error: (err) => console.log("Erreur lors de l'authentification: ",err)
    })
  }

}
