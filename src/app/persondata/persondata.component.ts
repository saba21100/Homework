import { Component, OnInit } from '@angular/core';
import { IData } from './Data';

@Component({
  selector: 'app-persondata',
  templateUrl: './persondata.component.html',
  styleUrls: ['./persondata.component.css']
})
export class PersondataComponent implements OnInit {
  person: IData;



  constructor() {
    this.person = {
      name: 'Dennis Schulist',
      isStudent: false,
      email: 'Karley_Dach@jasper.info',
      address: {
        street: "Norberto Crossing",
        suite: "Apt. 950",
        city: "South Christy",
        zipcode: 23505-1337,
      }
    };
  }

  ngOnInit() {}

  getStudentStatus(person: IData) {
    if (person.isStudent == false) {
      person.isStudent = true
      console.log('studentia ');
    } else {
      console.log('ukve studentia ');
    }
  }
}

