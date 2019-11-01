import { Component, OnInit, ContentChild } from '@angular/core';
import { ContentChildComponent } from '../content-child/content-child.component';

@Component({
  selector: 'app-content-parent',
  templateUrl: './content-parent.component.html',
  styleUrls: ['./content-parent.component.css']
})
export class ContentParentComponent implements OnInit {
  // @ContentChild(ContentChildComponent, { static: false }) contentChild: ContentChildComponent;
  @ContentChild(ContentChildComponent) contentChild: ContentChildComponent;

  title: string ="Reddy";
  cdata:any;
  constructor() { }

  ngOnInit() {
  }

  getEvent(event){
    this.cdata = event;
  }

  ngAfterContentInit() {
    this.contentChild.title="Chandan Singh";
    this.contentChild.country="Bharat";

    console.log("ngAfterContentInit called");
  }

  // ngAfterContentChecked()
  // {
  //   this.contentChild.title="Chandan Singh";
  //   this.contentChild.country="Bharat";
  //   console.log("ngAfterContentChecked called");
  // }

}
