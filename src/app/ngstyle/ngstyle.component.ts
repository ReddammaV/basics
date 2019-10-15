import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  myclassType: string = "online";
  myclassTypeId: number = 1;
  myCountry = "India";
  IsBold : boolean = true;
  FontSize: number = 40;
  IsItalic: boolean = true;

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

  getColor(country) {
    // if (country == "India") {
    //   return 'green';
    // } else if (country == "Pakistan") {
    //   return 'red';
    // }
    // else if (country == "china") {
    //   return 'blue';
    // }
    // else if (country == "USA") {
    //   return 'orange';
    // }

    switch (country) {
      case 'India':
        return 'green';
      case 'Pakistan':
        return 'red';
      case 'china':
        return 'blue';
      case 'USA':
        return 'orange';
    }
  }

  //multiple styles
  AddCSSStyles() {
    let CssStyles = {
      'font-weight': this.IsBold ? 'bold' : 'normal',
      'font-style': this.IsItalic ? 'italic' : 'normal',
      'font-size.px': this.FontSize
    };
    return CssStyles;
  }

}
