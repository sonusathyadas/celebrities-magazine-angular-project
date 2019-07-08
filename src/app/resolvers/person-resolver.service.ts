import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { paramKey } from 'blocking-proxy/built/lib/webdriver_commands';
import { Person } from '../models/person';
import { Observable } from 'rxjs';
import { DataManagerService } from '../services/data-manager.service';

@Injectable()
export class PersonResolverService implements Resolve<Person> {

    constructor(private dmSvc:DataManagerService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Person> {
        let id= parseInt(route.paramMap.get("id"));
        return this.dmSvc.getPerson(id);
    }
}
