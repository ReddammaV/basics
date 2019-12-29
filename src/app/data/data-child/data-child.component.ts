import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-child',
  templateUrl: './data-child.component.html',
  styleUrls: ['./data-child.component.css']
})
export class DataChildComponent implements OnInit {
  @Input() mydata: string;
  @Output() myOutput = new EventEmitter<any>();
  outdata = 'Reddy Output';
  // viewChild : any;
  viewChild = "Reddamma ViewChild";

  constructor() { }

  ngOnInit() {
  }

  myClick(){
    this.myOutput.emit(this.outdata);
  }

  anotherClick(){
    this.viewChild = "Reddamma ViewChild";
    console.log("ViewChild");
  }

}
