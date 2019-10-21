import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome'
})
export class WelcomePipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }

  transform(value: any, ...args: any[]): any {
    let message = "Welcome to " + value;
    return message;
  }

}
