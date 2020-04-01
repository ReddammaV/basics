import { Component, OnInit, OnChanges, DoCheck, ContentChild, AfterContentInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterContentInit  {
  // @ContentChild(ChildComponent, {static: true}) contentChild: ChildComponent;
  @ContentChild(ChildComponent) contentChild: ChildComponent;

  constructor() { 
    console.log("Parent Component: Constructor Called");
  }

  // ngOnChanges(){
  //   console.log("Parent Component: ngOnchanges Called");
  // }

  ngOnInit() {
    console.log("Parent Component: ngoninit Called");
  }

  // ngDoCheck() {
  //   console.log("Parent Component: ngDoCheck Called");
  // }

  ngAfterContentInit(){
    this.contentChild.mytitle = "Reddamma";
    console.log("Parent Component: ngAfterContentInit Called");
  }

}
