import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ChangecolorDirective } from '../changecolor.directive';

@Component({
  selector: 'app-mydirective',
  templateUrl: './mydirective.component.html',
  styleUrls: ['./mydirective.component.css']
})
export class MydirectiveComponent implements OnInit {
  // @ViewChild(ChangecolorDirective) colorDir: ChangecolorDirective;
  @ViewChildren(ChangecolorDirective) colorDir: QueryList<ChangecolorDirective>;

  constructor() { }

  ngOnInit() {
  }

  // setColor(val: string){
  //   this.colorDir.changeColor(val);
  // }

  setColor(val: string) {
    this.colorDir.forEach(element => {
      element.changeColor(val);
    });
  }


  ngAfterContentInit() {
    console.log('directive called');
  }

}
