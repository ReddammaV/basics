import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.css']
})
export class OutputChildComponent implements OnInit {
  formValues: any;
  // @Output() name = new EventEmitter<string>();
  @Output('eventClickAlias') name = new EventEmitter<string>();
  @Output('formValues') myFormValues = new EventEmitter<any>();

  typename = "Reddy";


  constructor() { }

  ngOnInit() {
  }

  outputMethod(){
    this.name.emit(this.typename);
  }

  onSubmit(form){
    console.log("Submitted", form);
    this.formValues = form;
    console.log(this.formValues);
    this.myFormValues.emit(this.formValues);
  }

}
