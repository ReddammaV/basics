import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-reference',
  templateUrl: './view-reference.component.html',
  styleUrls: ['./view-reference.component.css']
})
export class ViewReferenceComponent implements OnInit, AfterViewInit {

  // @ViewChild('someContent') someContent;
  @ViewChild('someContent') someContent: ElementRef;
  @ViewChild('title') title: ElementRef;
  @ViewChild('product') product: ElementRef;
  
  constructor() {
    // console.log(this.someContent);
   }

  ngOnInit() {
    console.log(this.someContent);
    console.log(this.someContent.nativeElement);
    this.someContent.nativeElement.style.color = 'red';
    this.someContent.nativeElement.style.fontSize = '2em';
    this.someContent.nativeElement.style.padding = '1em';
  }

  ngAfterViewInit(){
    // console.log(this.someContent);
    this.title.nativeElement.style.background = "black";
    this.title.nativeElement.style.color = "green";

    this.product.nativeElement.style.background = "red";
    this.product.nativeElement.style.color = "white";
  }

}
