import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  id: number;
  name: string;
  firstname: string;
  age: number;
  path: string;
  cin: number;
  job: string;
  private personnes: Personne [];

  linkAPI: string = 'http://localhost:3005/api/personnes'

  constructor( private http: HttpClient) {
    this.personnes = [
      new Personne(this.id= 1,this.name='Turki',this.firstname='Elyes',this.age= 39,this.path='rotating_card_profile1.png',this.cin=1,this.job='Consltant technique'),
      new Personne (this.id= 2,this.name='Ronaldo',this.firstname='Cristiano',this.age= 35,this.path='rotating_card_profile2.png',this.cin=2,this.job='Footballeur'),
      new Personne (this.id= 3,this.name='Messi',this.firstname='Lionel',this.age= 33,this.path='',this.cin=3,this.job='Footballeur'),
     ];
  }

  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.linkAPI);
  }

  getFakePersonnes(): Personne [] {
    return this.personnes;
  }

  getPersonneById(id: number) : Personne {
    // console.log("param====>: ",id, this.personnes);
    const personne = this.personnes.find(personne => {
      return personne.id == id;
    })
    return personne;
  }

  addPersonne(personne: Personne): Observable<any> {
    return this.http.post(this.linkAPI, personne);
  }

}
