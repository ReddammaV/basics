import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-child',
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.css']
})
export class InputChildComponent implements OnInit {
  // @Input() pData: string;
  @Input('pDataAlias') pData: string; // only one is accessable  @Input('pDataAlias') red: string; this will not

  constructor() { }

  ngOnInit() {
  }

}
