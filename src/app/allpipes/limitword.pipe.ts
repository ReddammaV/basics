import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitword'
})
export class LimitwordPipe implements PipeTransform {

  transform(value: any, limit: string, symbol: string): any {
    let limitChar = limit != null ? parseInt(limit) : 10;
    let symbolChar = symbol != null ? symbol : '...';
    return value.length > limitChar ? value.substring(0, limitChar) + symbolChar : value;
  }

}
