import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-reference',
  templateUrl: './view-reference.component.html',
  styleUrls: ['./view-reference.component.css']
})
export class ViewReferenceComponent implements OnInit, AfterViewInit {

  // @ViewChild('someContent') someContent;
  @ViewChild('someContent') someContent: ElementRef;
  
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
  }

}
