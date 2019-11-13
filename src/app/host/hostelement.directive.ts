import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHostelement]'
})
export class HostelementDirective {

  constructor(private elref:ElementRef, private renderer: Renderer) {
    this.changeColor('red');
   }

  ngOnInit(){
    // this.elref.nativeElement.style.backgroundColor = "red";
    // this.changeColor('red');
  }

  // changeColor(varColor: string){
  //   // this.elref.nativeElement.style.backgroundColor = varColor;
  //   this.renderer.setElementStyle(this.elref.nativeElement, 'backgroundColor', varColor);
  // }

  // @HostListener('mouseover') mouseOver() {
  //   this.changeColor('blue');
  //   // this.elref.nativeElement.style.backgroundColor = "blue";
  // }

  // @HostListener('mouseleave') mouseLeave() {
  //   this.changeColor('green');
  // }

  // @HostListener('click') mouseClick() {
  //   this.changeColor('cyan');
  // }

  @HostBinding('style.color') bgcolor: string;
  @HostBinding('class.text-primary')private ishovering: boolean;

  changeColor(varColor: string) {
    this.bgcolor = varColor;
    this.ishovering = false;
  }


  @HostListener('mouseover') OnMouseOver() {
    this.changeColor('#b4b4b4');
    this.ishovering = true;
  }

  @HostListener('mouseleave') OnMouseLeave() {
    this.changeColor('purple');
  }

}
