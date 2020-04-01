import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() pData: string;
  mytitle : any;
  mycountry: any;

  constructor() { 
    console.log("Child Component: Constructor Called");
  }

  // ngOnChanges(changes){
  //   console.log("Child Component: ngOnchanges Called");
  //   for (let propName in changes) {
  //     let chng = changes[propName];
  //     let cur  = chng.currentValue;
  //     let prev = chng.previousValue;
  //     console.log(propName + ' : Current Value: ' + cur + ' Previous Value: ' + prev);
  //   }
    
  // }

  ngOnInit() {
    console.log("Child Component: ngoninit Called");
    this.mytitle = "Reddy";
    this.mycountry= "India";
  }

  // ngDoCheck() {
  //   console.log("Child Component: ngDoCheck Called");
  // }

  ngAfterContentInit(){
    console.log("Child Component: ngAfterContentInit Called");
  }

}
