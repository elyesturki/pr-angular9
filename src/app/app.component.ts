import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pr-angular9';

  bgColor = 'yellow';
  show = false

  changeStatus() {
    this.show = !this.show;
  }
}
