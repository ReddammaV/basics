import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showAlert() {
    alert("Hi");
  }

  isShow: boolean = true;

  showDiv(value: boolean) {
    this.isShow = value;
  }

  enteredData: string = "Ajeet Singh";
  
  setMsg(val: string) {
    this.enteredData = val;
  }

}
