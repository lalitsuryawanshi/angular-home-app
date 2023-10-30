import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fieldSum'
})
export class FieldSumPipe implements PipeTransform {

    transform(items: any[], attr: string): number {
      var totalAmount = 0;
      totalAmount = items.reduce((a, b) => Number(a) + Number(b[attr]), 0);
      return totalAmount;
    }
}
