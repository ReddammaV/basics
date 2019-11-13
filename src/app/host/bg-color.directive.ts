import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBgColor]'
})
export class BgColorDirective {

  @Input() defaultColor: string = "black";
  @Input() mouseOverColor: string = "yellow";
  @Input() mouseLeaveColor: string = "gray";

  @HostBinding('style.backgroundColor') bgColor: string;


  constructor() {
    this.bgColor = this.defaultColor;
  }

  ngOnChanges() {
    this.bgColor = this.defaultColor;
  }


  @HostListener('mouseover') OnMouseOver() {
    this.bgColor = this.mouseOverColor;
  }

  @HostListener('mouseleave') OnMouseLeave() {
    this.bgColor = this.mouseLeaveColor;
  }


}
