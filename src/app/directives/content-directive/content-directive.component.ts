import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { ChangecolorDirective } from '../changecolor.directive';

@Component({
  selector: 'app-content-directive',
  templateUrl: './content-directive.component.html',
  styleUrls: ['./content-directive.component.css']
})
export class ContentDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  

}
