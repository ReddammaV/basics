import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  personData = [
    { name: "Ajeet", MobileNo: "12345676879" },
    { name: "Chandan", MobileNo: "233432" },
    { name: "deepak", MobileNo: "97868767" },
    { name: "Ajay", MobileNo: "7787878" },
    { name: "Ram", MobileNo: "95656" }
  ];

  constructor() { }

  ngOnInit() {
  }

  Addmore() {
    this.personData = [
      { name: "Ajeet", MobileNo: "12345676879" },
      { name: "Chandan", MobileNo: "233432" },
      { name: "deepak1", MobileNo: "97868767" },
      { name: "Ajay", MobileNo: "7787878" },
      { name: "Ram", MobileNo: "95656" },
      { name: "Ram", MobileNo: "898212" }
    ];
  }

  fntrackBy(index: number, people: any) {
    return people.name;
  }

}
