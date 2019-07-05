import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { DataManagerService } from '../services/data-manager.service';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']    
})
export class ListComponent implements OnInit {

    public persons:Person[];

    constructor(private dmanagerSvc:DataManagerService) { 
        this.persons=this.dmanagerSvc.getPersons();
    }

    ngOnInit() {
        
    }

}
