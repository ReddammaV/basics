import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent implements OnInit {
  @Output('passData') data = new EventEmitter<any>();
  name = 'Reddy';
  title: string = "Ajeet Singh";
  country = "India";

  onClick() {
    this.title = "Sahosoft";
    this.country = "Hindustan";
  }
  constructor() { }

  ngOnInit() {
  }

  childContent() {
    this.data.emit(this.name);
  }

}
