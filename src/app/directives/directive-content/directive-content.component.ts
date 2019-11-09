import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { ChangecolorDirective } from '../changecolor.directive';

@Component({
  selector: 'app-directive-content',
  templateUrl: './directive-content.component.html',
  styleUrls: ['./directive-content.component.css']
})
export class DirectiveContentComponent implements OnInit {
  @ContentChildren(ChangecolorDirective) changeColor: QueryList<ChangecolorDirective>

  constructor() { }

  ngOnInit() {
  }

  setColor(val){
    this.changeColor.forEach( el => el.changeColor(val))
  }

}
