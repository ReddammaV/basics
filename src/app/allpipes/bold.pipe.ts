import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bold'
})
export class BoldPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let assbold = '<b>' + value + '</b>';
    return assbold;
  }

}
