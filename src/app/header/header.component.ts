import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  visibility: boolean = false;

  constructor( private authentificationServiver: AuthentificationService, private router: Router){ }

  ngOnInit(): void {
    console.log("isLoggedIn: ",this.isLoggedIn)
  }

  logout() {
    this.router.navigate(['/']);
    this.authentificationServiver.logout();
  }

  isLoggedIn(): boolean {
    return this.authentificationServiver.isLoggedIn();
  }

  showMenu() {
    this.visibility = !this.visibility;
  }

}
