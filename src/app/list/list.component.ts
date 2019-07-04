import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public persons:Person[]=[
    {firstName:'Amitab', lastName:'Bachchan', age:72, profession:'Actor', imageUrl:'assets/amitab.jpg'},
    {firstName:'Virat', lastName:'Kohli', age:31, profession:'Cricket', imageUrl:'assets/virat-kohli.jpg'},
    {firstName:'Shreya', lastName:'Ghoshal', age:36, profession:'Singer', imageUrl:''},
    {firstName:'Sourav', lastName:'Ganguly', age:45, profession:'Cricket', imageUrl:'assets/ganguly.jpg'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
