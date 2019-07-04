import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'add-person',
    templateUrl: './add-person.component.html',
    styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

    form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            "firstName": new FormControl("", Validators.required),
            "lastName": new FormControl("", Validators.required),
            "age": new FormControl(0, Validators.compose([Validators.required, Validators.min(1), Validators.max(120)])),
            "imageUrl": ["", Validators.required],
            "profession": ["", Validators.compose([Validators.required, Validators.minLength(3)])]
        })
    }

    ngOnInit() {
    }

}
