import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  tabOfColors = ['blue', 'green', 'coral', 'purple', 'pink', 'orange', 'red', 'yellow', 'grey']
  @HostBinding('style.borderColor') bc;
  @HostBinding('style.color') color;
  constructor() { }

  @HostListener('keypress') changeColor() {
    const index = Math.floor(Math.random() * (this.tabOfColors.length - 1));
    this.bc = this.tabOfColors[index]
    this.color = this.tabOfColors[index]
  }

}
