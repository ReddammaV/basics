import { Component, OnInit, Input, OnChanges, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-child',
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.css']
})
export class InputChildComponent implements OnInit  {
  // @Input() pData: string;
  @Input('pDataAlias') pData: string; // only one is accessable  @Input('pDataAlias') red: string; this will not
  @Input('formData') fData: any;

  // formValues = this.fData;
  formValues: any;
  fullName: any;
  email : any;
  password: any;

  constructor() {
   }

  ngOnInit() {
    // this.formValues = this.fData;
    // this.fullName = this.formValues.fullname;
    // this.email = this.formValues.email;
    // console.log(this.email,'email');
    // this.password = this.formValues.password;
  }

  // public ngOnChanges(changes: SimpleChanges) {
  //   Object.keys(changes).some(key => {
  //     const { currentValue, previousValue } = changes[key];

  //     if (JSON.stringify(currentValue) !== JSON.stringify(previousValue)) {
  //       this.ref.detectChanges();
  //       return true;
  //     }

  //     return false;
  //   });    
  // }

  // ngOnChanges() {
  //   // this.formValues = this.fData;
  //   // console.log(this.formValues,'formValues');
  //   console.log('formValues');

  //   //  this.fullName = this.formValues.fullname;
  //   // this.email = this.formValues.email;
  //   // console.log(this.email,'email');
  //   // this.password = this.formValues.password;
  // }


}
