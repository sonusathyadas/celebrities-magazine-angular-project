import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    //Binding model 
    public user={
        username:"admin",
        password:"mypwd"
    }

    constructor() { }

    ngOnInit() {
    }

    login(){
        console.log(this.user.username);
        console.log(this.user.password);
    }

    dataChanged(ev){
        console.log("New value:" + ev);
    }
}
