import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../demo-pure-impure/model/demo'

@Pipe({
  name: 'isPassedImpure',
  pure: false
})
export class IsPassedImpurePipe implements PipeTransform {

  transform(value: Student[]): any {
    console.log('Impure Pipe');
    value.forEach(s => {
      console.log(s);
    });
    console.log('--------------------------------------------------------');
    return value.filter(student => student.isPassed);
  }

}
