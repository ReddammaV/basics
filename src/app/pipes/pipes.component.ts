import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'directiveapp';
  
  Name : string = "AjEeT SinGh"

  Employee = {
    Name : "Ajeet Kumar Singh",
    MobileNo : 8745645566
  }

  currentDate = new Date();
  birthday = new Date(1991, 7, 10);


}
