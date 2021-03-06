import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-parent',
  templateUrl: './output-parent.component.html',
  styleUrls: ['./output-parent.component.css']
})
export class OutputParentComponent implements OnInit {
  cData: any;
  getValues: any;
  fullname: any;
  email: any;
  password: any;

  constructor() { }

  ngOnInit() {
  }

  getEvent(event) {
    this.cData = event;
  }

  getFormValues(event) {
    this.getValues = event;
    console.log(this.getValues.fullname);
    this.fullname = this.getValues.fullname;
    this.email = this.getValues.email;
    this.password = this.getValues.password;
  }

}
