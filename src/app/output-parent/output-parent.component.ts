import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-parent',
  templateUrl: './output-parent.component.html',
  styleUrls: ['./output-parent.component.css']
})
export class OutputParentComponent implements OnInit {
  cData: any;

  constructor() { }

  ngOnInit() {
  }

  getEvent(event){
    this.cData = event;
  }

}
