import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  myClass: string = 'one two';
  myclassType: string = "online";

  personData = [
    { name: "Ajeet", country: "India" },
    { name: "Chandan", country: "Pakistan" },
    { name: "deepak", country: "china" },
    { name: "Ajay", country: "USA" },
    { name: "Ram", country: "India" }
  ];

  constructor() { }

  ngOnInit() {
  }

  getClass(){
    this.myClass = 'three four';
  }

}
