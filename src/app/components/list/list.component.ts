import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import { DataManagerService } from '../../services/data-manager.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']    
})
export class ListComponent implements OnInit {

    //public persons:Person[];
    public persons:Observable<Person[]>;

    constructor(private dmanagerSvc:DataManagerService) { 
        this.persons= this.dmanagerSvc.getPersons();

        // .subscribe(
        //     result=>this.persons=result, //success
        //     err=>console.log(err)        //error
        // )
    }

    ngOnInit() {
        
    }

}
