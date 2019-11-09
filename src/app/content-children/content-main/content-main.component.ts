import { Component, OnInit, ContentChild, ViewChild, QueryList } from '@angular/core';
import { ContentchildrenChildComponent } from '../contentchildren-child/contentchildren-child.component';

@Component({
  selector: 'app-content-main',
  templateUrl: './content-main.component.html',
  styleUrls: ['./content-main.component.css']
})
export class ContentMainComponent implements OnInit {
  // @ViewChild(ContentchildrenChildComponent) counterComponent: ContentchildrenChildComponent;
  // @ViewChild(ContentchildrenChildComponent) counterComponent: QueryList<ContentchildrenChildComponent>;

  constructor() { }

  ngOnInit() {
  }

  Increase() {
    // this.counterComponent.increasebyOne();
    // this.counterComponent.forEach(el => el.increasebyOne());
  }

  Decrease() {
    // this.counterComponent.decreasebtOne();
    // this.counterComponent.forEach(el => el.decreasebtOne());
  }

}
