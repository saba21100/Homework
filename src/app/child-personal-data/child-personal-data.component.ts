import { Component, Input, OnInit } from '@angular/core';
import { Address } from '../persondata/Data';

@Component({
  selector: 'app-child-personal-data',
  templateUrl: './child-personal-data.component.html',
  styleUrls: ['./child-personal-data.component.css']
})
export class ChildPersonalDataComponent implements OnInit {

  @Input() address!:Address;

  constructor() { }

  ngOnInit(): void {
  }

}