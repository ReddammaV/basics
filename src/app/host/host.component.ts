import { Component, OnInit, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  Red: string = "Red";
  green: string = "green";
  blue: string = "blue";


  constructor(private elref:ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    // this.changeColor('red');
  }

  // @HostBinding('style.color') bgcolor: string;
  // @HostBinding('class.text-primary')private ishovering: boolean;

  // changeColor(varColor: string) {
  //   this.bgcolor = varColor;
  //   this.ishovering = false;
  // }


  // @HostListener('mouseover') OnMouseOver() {
  //   this.changeColor('#b4b4b4');
  //   this.ishovering = true;
  // }

  // @HostListener('mouseleave') OnMouseLeave() {
  //   this.changeColor('blue');
  // }

  @HostListener('click') onClick() {
    alert("clicked");
  }

  changeColor(varColor: string){
    // this.elref.nativeElement.style.backgroundColor = varColor;
    this.renderer.setElementStyle(this.elref.nativeElement, 'color', varColor);
  }

  
  @HostListener('mouseover') onmouseover() {
    this.changeColor('violet')
  }

  @HostListener('mouseout') onmouseout() {
    this.changeColor('cyan')
  }

}
