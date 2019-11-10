import { Component, OnInit, ContentChild, AfterContentInit, ElementRef } from '@angular/core';
import { ContentchildChildComponent } from '../contentchild-child/contentchild-child.component';

@Component({
  selector: 'app-contentchild-parent',
  templateUrl: './contentchild-parent.component.html',
  styleUrls: ['./contentchild-parent.component.css']
})
export class ContentchildParentComponent implements OnInit, AfterContentInit {
  @ContentChild(ContentchildChildComponent) contentChildren: ContentchildChildComponent;
  @ContentChild('title') title: ElementRef;

  msg: any;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.contentChildren.mytitle = "Reddamma";
    this.contentChildren.mycountry = "Bharath";
  }

  onClick(){
    console.log(this.title.nativeElement.value);
    this.msg = this.title.nativeElement.value;
  }

}
