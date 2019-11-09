import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentchild-child',
  templateUrl: './contentchild-child.component.html',
  styleUrls: ['./contentchild-child.component.css']
})
export class ContentchildChildComponent implements OnInit {
  mytitle :any;
  mycountry: any;
  
  constructor() { }

  ngOnInit() {
    this.mytitle = "Reddy";
    this.mycountry = "India";
  }

}
