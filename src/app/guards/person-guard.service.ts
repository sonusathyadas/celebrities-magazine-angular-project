import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AddPersonComponent } from '../components/add-person/add-person.component';
import { BasePersonComponent } from '../components/base-person/base-person.component';

@Injectable()
export class PersonGuardService implements CanDeactivate<BasePersonComponent> {

    constructor() { }

    canDeactivate(component: BasePersonComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): boolean {

        let res= confirm("Are you really want to leave this page?");        
        return res;
    }

}
