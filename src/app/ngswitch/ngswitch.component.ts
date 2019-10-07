import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {
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

  person: string = "Rahul";



}
