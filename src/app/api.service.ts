import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  list: number[] = [100];
  constructor() { }

  allNum(val: number){
    this.list.push(val);
  }

  getList(){
    return this.list;
  }
}
