import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greet'
})
export class GreetPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let today = new Date()
    let curHr = today.getHours()
    let msg = '';

    if (curHr < 12) {
      console.log('Good Morning');
      msg = "Good Morning";
      // alert("Good Morning");
    } else if (curHr < 18) {
      console.log('Good Afternoon');
      msg = "Good Afternoon";
      // alert("Good Afternoon");
    } else {
      console.log('Good Evening');
      //  alert("Good Evening");
      msg = "Good Evening";
    }
    return msg;
  }

}


