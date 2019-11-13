import { Component, OnInit, ContentChildren, QueryList, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { ChangecolorDirective } from '../changecolor.directive';
import { DirectiveContentComponent } from '../directive-content/directive-content.component';

@Component({
  selector: 'app-content-directive',
  templateUrl: './content-directive.component.html',
  styleUrls: ['./content-directive.component.css']
})
export class ContentDirectiveComponent implements OnInit {
  @ViewChild('hello') hello: ElementRef;
  @ViewChild(DirectiveContentComponent) DirectiveComponent:DirectiveContentComponent;

  message: any;

  constructor() { }

  ngOnInit() {
    this.hello.nativeElement.style.color = 'Orange';
    // this.message = this.DirectiveComponent.myname;
    // console.log(this.message);
    this.DirectiveComponent.myname = 'Reddamma';
  }

  

}
