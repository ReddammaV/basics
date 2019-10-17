import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  firstName: string = "Ajeet";
  imagePath: string = "assets/Expert_Ajeet.jpg";
  currentValue: boolean = true;

  DisableandEnable() {
    this.currentValue = !this.currentValue;
  }

}
