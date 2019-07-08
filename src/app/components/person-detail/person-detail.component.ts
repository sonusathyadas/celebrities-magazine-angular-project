import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataManagerService } from '../../services/data-manager.service';
import { Person } from '../../models/person';

@Component({
    selector: 'person-detail',
    templateUrl: './person-detail.component.html',
    styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

    public id: number;
    public person: Person;

    constructor(private route: ActivatedRoute, private dm: DataManagerService) {
        //this.id=this.route.snapshot.params["id"];        
        this.id = parseInt(this.route.snapshot.paramMap.get("id"));
        this.dm.getPerson(this.id)
            .subscribe(
                result => this.person = result,
                err => console.log(err)
            )
    }

    ngOnInit() {

    }

}
