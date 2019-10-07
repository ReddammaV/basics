import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Mynum } from '../mynum.enum';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
  IsShow = true;
  IsMale = true;
  IsAdmin = false;
  emp1 = { name: "Ajeet", MobileNo: "12345676879" }
  emp2 = null;
  emp3 = {};

  numEnum = Mynum;
  constructor() { }

  ngOnInit() {

  }

  changeValue(val: boolean) {
    this.IsMale = val;
    // var aa = this.numEnum;
  }

  onclick() {
    this.IsAdmin = !this.IsAdmin;
  }

}
