import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {
  formValues: any;
  title = 'Reddy';
  country = "India";

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.title = "Sahosoft";
    this.country = "Hindustan";
  }

  onSubmit(form) {
    console.log('Submitted', form);
    this.formValues = form;
    console.log(this.formValues);
  }

}
