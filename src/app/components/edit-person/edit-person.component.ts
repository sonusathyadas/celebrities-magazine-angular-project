import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataManagerService } from '../../services/data-manager.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Person } from '../../models/person';
import { BasePersonComponent } from '../base-person/base-person.component';

@Component({
    selector: 'edit-person',
    templateUrl: './edit-person.component.html',
    styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent extends BasePersonComponent implements OnInit {

    form: FormGroup;
    alertStatus = {
        success: false,
        submited: false,
        message: ""
    }
    person: Person;

    constructor(private fb: FormBuilder,
        private dmSvc: DataManagerService,
        private router: Router,
        private route: ActivatedRoute) {
        super();
    }

    get firstName() { return this.form.get("firstName"); }
    get lastName() { return this.form.get("lastName"); }
    get age() { return this.form.get("age"); }
    get imageUrl() { return this.form.get("imageUrl"); }
    get profession() { return this.form.get("profession"); }

    ngOnInit() {
        this.person = this.route.snapshot.data["resolvedPerson"];
        this.form = this.fb.group({
            "id": new FormControl(this.person.id),
            "firstName": new FormControl(this.person.firstName, Validators.required),
            "lastName": new FormControl(this.person.lastName, Validators.required),
            "age": new FormControl(this.person.age, Validators.compose([Validators.required, Validators.min(1), Validators.max(120)])),
            "imageUrl": [this.person.imageUrl, Validators.required],
            "profession": [this.person.profession, Validators.compose([Validators.required, Validators.minLength(3)])]
        })
    }

    save() {

    }
}
