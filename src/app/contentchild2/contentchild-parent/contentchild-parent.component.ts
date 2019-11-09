import { Component, OnInit, ContentChild, AfterContentInit } from '@angular/core';
import { ContentchildChildComponent } from '../contentchild-child/contentchild-child.component';

@Component({
  selector: 'app-contentchild-parent',
  templateUrl: './contentchild-parent.component.html',
  styleUrls: ['./contentchild-parent.component.css']
})
export class ContentchildParentComponent implements OnInit, AfterContentInit {
  @ContentChild(ContentchildChildComponent) contentChildren: ContentchildChildComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.contentChildren.mytitle = "Reddamma";
    this.contentChildren.mycountry = "Bharath";
  }

}
