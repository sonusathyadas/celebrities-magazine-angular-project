import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private colorName:string="blue";
  private size:number=23;
  private mystyle={
    "font-size":"23px",
    "color":"red"
  }
  private message:string;
  private products:any[]=[
    { id:1, name: "Apple", price:1208675500.89700, quantity:300400.934444, mfgDate:new Date(2019, 6,21)},
    { id:2, name: "Orange", price:90, quantity:40, mfgDate:new Date(2019, 3,10)},
    { id:3, name: "Mango", price:150, quantity:50, mfgDate:new Date(2019, 6,21)},
    { id:4, name: "Grape", price:70, quantity:20, mfgDate:new Date(2019, 5,24)},
  ];

  constructor() {
      this.message = "Welcome to Home page";
   }

  ngOnInit() {
  }

}
