import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.css']
})
export class OutputChildComponent implements OnInit {
  // @Output() name = new EventEmitter<string>();
  @Output('eventClickAlias') name = new EventEmitter<string>();

  typename = "Reddy";


  constructor() { }

  ngOnInit() {
  }

  outputMethod(){
    this.name.emit(this.typename);
  }

}
