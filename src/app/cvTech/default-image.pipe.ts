import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string, args?: string): string {
    if (!value) {
      return 'assets/images/default-img.jpg';
    }
    return value;
  }

}
