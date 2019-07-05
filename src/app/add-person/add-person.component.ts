import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Person } from '../models/person';
import { DataManagerService } from '../services/data-manager.service';
import { Router } from '@angular/router';

@Component({
    selector: 'add-person',
    templateUrl: './add-person.component.html',
    styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

    form: FormGroup;
    alertStatus={
        success:false,
        submited:false,
        message:""
    }
    constructor(private fb: FormBuilder, 
        private dmSvc:DataManagerService, 
        private router:Router) {

        this.form = this.fb.group({
            "firstName": new FormControl("", Validators.required),
            "lastName": new FormControl("", Validators.required),
            "age": new FormControl(0, Validators.compose([Validators.required, Validators.min(1), Validators.max(120)])),
            "imageUrl": ["", Validators.required],
            "profession": ["", Validators.compose([Validators.required, Validators.minLength(3)])]
        })
    }

    get firstName(){ return this.form.get("firstName");}
    get lastName(){ return this.form.get("lastName");}
    get age(){ return this.form.get("age");}
    get imageUrl(){ return this.form.get("imageUrl"); }
    get profession(){ return this.form.get("profession");}

    ngOnInit() {
    }

    save(){
        this.alertStatus.submited=true;
        if(this.form.valid){            
            console.log(this.form.value);
            let person:Person= this.form.value;            
            this.dmSvc.addPerson(person);
            this.router.navigate(['/persons'])
            //this.alertStatus.success=true;
            //this.alertStatus.message="Saved successfully!";
        }else{            
            this.alertStatus.success=false;
            this.alertStatus.message="Invalid form data, validation failed";
        }
    }
}
