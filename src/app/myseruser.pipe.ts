import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myseruser'
})
export class MyseruserPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
