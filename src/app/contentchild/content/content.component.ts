import { Component, OnInit, ViewChild } from '@angular/core';
import { ContentChildComponent } from '../content-child/content-child.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @ViewChild(ContentChildComponent) counterComponent: ContentChildComponent;

  myPerson = [
    { id: 1, name: 'Ram', Marks: 50 },
    { id: 2, name: 'Mohan', Marks: 35 },
    { id: 3, name: 'Sohan', Marks: 59 },
    { id: 4, name: 'Ganesh', Marks: 80 },
  ];

  constructor() { }

  ngOnInit() {
  }
  Increase() {
    this.counterComponent.increasebyOne();
  }

  Decrease() {
    this.counterComponent.decreasebtOne();
  }
  
}
