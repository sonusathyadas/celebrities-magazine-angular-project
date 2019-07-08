import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    message: string;
    
    constructor() {
        this.message = "Welcome to Celebrities magazine";        
    }

    ngOnInit() {
        console.log("Home ngOnInit executed");
    }

}
