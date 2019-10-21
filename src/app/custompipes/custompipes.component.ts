import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipes',
  templateUrl: './custompipes.component.html',
  styleUrls: ['./custompipes.component.css']
})
export class CustompipesComponent implements OnInit {
  name : string= "Sahosoft solutions";

  remarks : string = "My name is ajeet kumar singh and i am a software developer";

  constructor() { }

  ngOnInit() {
  }

}
