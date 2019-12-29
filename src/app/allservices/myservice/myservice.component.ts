import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-myservice',
  templateUrl: './myservice.component.html',
  styleUrls: ['./myservice.component.css']
})
export class MyserviceComponent implements OnInit {
  allNum: number[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getList();
  }

  addNum(data: number){
    this.apiService.allNum(data);
    this.getList();
    // console.log('data',data);
  }

  // save(event){
  //   this.apiService.allNum(event.target.value);
  //   console.log("You entered: ", event.target.value);
  // }


  getList(){
    this.allNum = this.apiService.getList();
    console.log(this.allNum);
  }

}
