import { Component, OnInit, ViewChild, QueryList, AfterViewInit, ViewChildren, AfterViewChecked, ContentChildren } from '@angular/core';
import { ContentchildrenChildComponent } from '../contentchildren-child/contentchildren-child.component';

@Component({
  selector: 'app-contentchildren-parent',
  templateUrl: './contentchildren-parent.component.html',
  styleUrls: ['./contentchildren-parent.component.css']
})
export class ContentchildrenParentComponent implements OnInit, AfterViewInit {
  // @ViewChild(ContentchildrenChildComponent) counterComponents: ContentchildrenChildComponent;
  // @ViewChildren(ContentchildrenChildComponent) counterComponents: QueryList<ContentchildrenChildComponent>;

  @ContentChildren(ContentchildrenChildComponent) counterComponents: QueryList<ContentchildrenChildComponent>;


  msg: any;
  varData1 = "Reddy";
  varData2 = "Aruna";
  varData3 = "Mohan";
  varData4 = "Reddy";


  constructor() { }

  ngOnInit() {
    // this.msg = this.counterComponents.forEach( el => el.mymsg);
  }

  ngAfterViewInit() {
    let length = this.counterComponents.length;
    // alert(length);
  }

  Increase() {
    // this.counterComponent.increasebyOne();
    this.counterComponents.forEach(element => element.increasebyOne());
    // this.counterComponents.first.increasebyOne();
    // this.counterComponents.last.increasebyOne();
    // this.counterComponents.find(data => data.name === "Aruna").increasebyOne();
    // this.counterComponents.filter(data => data.name === "Reddy").forEach(element => element.increasebyOne());
  }

  Decrease() {
    // this.counterComponent.decreasebtOne();
    this.counterComponents.forEach(element => element.decreasebtOne());
    // this.counterComponents.first.decreasebtOne();
    // this.counterComponents.last.decreasebtOne();
    // this.counterComponents.find(data => data.name === "Aruna").decreasebtOne();
    // this.counterComponents.filter(data => data.name === "Reddy").forEach(element => element.decreasebtOne());
  }




}
