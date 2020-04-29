import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  monObservable: Observable<string>
  mesImages = [
    'rotating_card_profile.png',
    'rotating_card_profile1.png',
    'rotating_card_profile2.png',
    'rotating_card_thumb.png'
  ];
  currentImage : string;

  constructor() { }

  ngOnInit(): void {
   // this.monObservable = Observable.create((observer) => { // 1er methode avec .create
    this.monObservable = new Observable((observer) => {
      let i = this.mesImages.length - 1;
      setInterval(()=> {
        observer.next(this.mesImages[i]);
          if(i>0){
            i--;
          } else {
            i = this.mesImages.length - 1;
          }

      }, 1000)
    });

    this.monObservable.subscribe({
        next: (result) => {
          console.log("result Observable: ", result);
          this.currentImage = result;
        },
        error: (err) => console.error('Observer got an error: ', err),
        complete: () => console.log('Observer got a complete notification')
    });
      // (result) => {
      //     this.currentImage = result;
      //  },
      //  (err) => console.error('Observer got an error: ', err),
      //  () => console.log('Observer got a complete notification')

  }

}
