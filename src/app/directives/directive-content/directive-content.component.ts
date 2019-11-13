import { Component, OnInit, ContentChildren, QueryList, ContentChild, Input, HostBinding, ElementRef } from '@angular/core';
import { ChangecolorDirective } from '../changecolor.directive';

@Component({
  selector: 'app-directive-content',
  templateUrl: './directive-content.component.html',
  styleUrls: ['./directive-content.component.css']
})
export class DirectiveContentComponent implements OnInit {
  @ContentChild(ChangecolorDirective, { read: ElementRef }) changeColor: ChangecolorDirective;

  myname: string = "Reddy";
  constructor() { }

  ngOnInit() {
  } 

  

  ngAfterContentInit() {                                            
    console.log('directive called');
  }



}
