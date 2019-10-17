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

  col = "2";
  IsBold: boolean = true;
  fontsize: number = 40;

  FontSize: number = 40;
  IsItalic: boolean = true;

  AddCSSStyles() {
    let CssStyles = {
      'font-weight': this.IsBold ? 'bold' : 'normal',
      'font-style': this.IsItalic ? 'italic' : 'normal',
      'font-size.px': this.FontSize
    };
    return CssStyles;
  }

  ClassToApply: string = "boldClass text-success";
  ApplyBoldClass: boolean = true;
  ApplyItalicClass: boolean = true;

  AddcssClass()
  {
    let cssClass = {
      boldClass : this.ApplyBoldClass,
      italicsClass : this.ApplyItalicClass
    };
    return cssClass;
  }

}
