import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {

  focus = true;

  constructor(private elmref:ElementRef) {
    // this.elmref.nativeElement.style.color = "red";
   }

  ngAfterViewInit(){
    this.elmref.nativeElement.style.color = "red";
  }

  changeColor(color){
    this.elmref.nativeElement.style.color = color;
  }



}
