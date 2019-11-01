import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  reactiveForm: FormGroup;

  formDataValues: any;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  // convenience getter for easy access to form fields
  get form() { return this.reactiveForm.controls; }

  createForm() {
    this.reactiveForm = this.fb.group({
      gridRadios: ['', Validators.required],
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.reactiveForm.invalid) {
      return;
    }

    console.log('reactiveForm', this.reactiveForm.value);
    this.formDataValues = this.reactiveForm.value;
    console.log(this.formDataValues);
  }

}
