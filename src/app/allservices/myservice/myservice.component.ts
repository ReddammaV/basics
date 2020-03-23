import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-myservice',
  templateUrl: './myservice.component.html',
  styleUrls: ['./myservice.component.css']
})
export class MyserviceComponent implements OnInit {
  allNum: number[] = [];
  myUsers: any;

  users = ["red", "blue", "green"];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getList();
    this.getUsers()
  }

  addNum(data: number) {
    this.apiService.allNum(data);
    this.getList();
    // console.log('data',data);
  }

  // save(event){
  //   this.apiService.allNum(event.target.value);
  //   console.log("You entered: ", event.target.value);
  // }


  getList() {
    this.allNum = this.apiService.getList();
    console.log(this.allNum);
  }

  addUser(val: any) {
    this.users.push(val);
    localStorage.setItem('users', JSON.stringify(this.users));
    console.log("users", this.users);
    this.getUsers();
  }

  getUsers() {
    // return this.users;
    this.myUsers = JSON.parse(localStorage.getItem('users'))
  }

  // localStorage.removeItem('users');
  // localStorage.clear();

  // sessionStorage.removeItem('users');
  // sessionStorage.clear();

}
