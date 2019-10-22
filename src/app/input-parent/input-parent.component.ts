import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-parent',
  templateUrl: './input-parent.component.html',
  styleUrls: ['./input-parent.component.css']
})
export class InputParentComponent implements OnInit {
  name = "Reddy";
  reactiveForm: FormGroup;
  formDataValues: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.reactiveForm = this.fb.group({
      fullname: [''],
      email: [''],
      password: ['']
    });
  }

  onSubmit() {
    console.log('reactiveForm' , this.reactiveForm.value);
    this.formDataValues = this.reactiveForm.value;
    console.log(this.formDataValues);
  }

}
