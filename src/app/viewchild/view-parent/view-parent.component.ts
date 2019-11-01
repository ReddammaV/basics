import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.css']
})
export class ViewParentComponent implements OnInit, AfterViewInit {
  // @ViewChild(ViewChildComponent, { static: false }) viewChild: ViewChildComponent;
  @ViewChild(ViewChildComponent) viewChild: ViewChildComponent;

  getValues: any;
  fullname: any;
  email: any;
  password: any;

  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit() {
    this.viewChild.title = "Reddamma";
    this.viewChild.country = "Bhart";

    // this.viewChild.onClick();
    // console.log(this.viewChild.onClick(), 'onclick')
    

    // this.viewChild.formValues = this.getValues;
    // this.fullname = this.getValues.fullname;
    // this.email = this.getValues.email;
    // this.password = this.getValues.password;
    // console.log(this.viewChild.formValues, 'formvalues');
  }

  ngAfterViewInit() {
    // this.viewChild.title = "Reddamma";
    // this.viewChild.country = "Bhart";
    this.viewChild.formValues = this.getValues; 
    console.log(this.getValues, 'formvalues');

    console.log("ngAfterViewInit called");
    this.cdref.detectChanges(); // this is important for viewchild if you are implementing here
  }

}
