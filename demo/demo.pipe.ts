import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo'
})
export class DemoPipe implements PipeTransform {

  transform(base: number,exponent: number): number {
    return Math.pow(base,exponent);
  }

}
