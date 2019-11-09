import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, ViewChildren, QueryList } from '@angular/core';
import { ViewchildrenChildComponent } from '../viewchildren-child/viewchildren-child.component';
import { ChangeDetectionStrategy } from '@angular/core/src/render3/jit/compiler_facade_interface';

@Component({
  selector: 'app-viewchildren-parent',
  templateUrl: './viewchildren-parent.component.html',
  styleUrls: ['./viewchildren-parent.component.css']
})
export class ViewchildrenParentComponent implements OnInit, AfterViewInit {
  @ViewChild(ViewchildrenChildComponent) viewComp: ViewchildrenChildComponent;
  // @ViewChildren(ViewchildrenChildComponent) viewComp: QueryList<ViewchildrenChildComponent>


  message: string;
  myArray : any;

  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit() {
    this.message = this.viewComp.childVar;
    this.myArray = this.viewComp.array;
    console.log(this.myArray);    
  }

  ngAfterViewInit(){
    // this.message = this.viewComp.childVar;
    // console.log(this.message);

    // this.viewComp.forEach( el => {
    //   el.childVar;
    // });
  }


}
