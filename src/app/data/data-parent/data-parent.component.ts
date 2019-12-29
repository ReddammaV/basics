import { Component, OnInit, ViewChild } from '@angular/core';
import { DataChildComponent } from '../data-child/data-child.component';

@Component({
  selector: 'app-data-parent',
  templateUrl: './data-parent.component.html',
  styleUrls: ['./data-parent.component.css']
})
export class DataParentComponent implements OnInit {
  @ViewChild(DataChildComponent) dcomp: DataChildComponent;
  data:any = "Reddy Input";
  cData: any;
  constructor() { }

  ngOnInit() {
  }

  output(event){
    this.cData = event;
  }

}
