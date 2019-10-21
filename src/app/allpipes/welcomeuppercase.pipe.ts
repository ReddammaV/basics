import { Pipe, PipeTransform } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Pipe({
  name: 'welcomeuppercase'
})
export class WelcomeuppercasePipe extends UpperCasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let result = super.transform(value);

    let message = "Welcome to " + result;
    return message;
  }

}
