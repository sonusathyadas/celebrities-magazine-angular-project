import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
    providedIn: 'root'
})
export class DataManagerService {

    private persons: Person[] = [
        { firstName: 'Amitab', lastName: 'Bachchan', age: 72, profession: 'Actor', imageUrl: 'assets/amitab.jpg' },
        { firstName: 'Virat', lastName: 'Kohli', age: 31, profession: 'Cricket', imageUrl: 'assets/virat-kohli.jpg' },
        { firstName: 'Shreya', lastName: 'Ghoshal', age: 36, profession: 'Singer', imageUrl: '' },
        { firstName: 'Sourav', lastName: 'Ganguly', age: 45, profession: 'Cricket', imageUrl: 'assets/ganguly.jpg' }
    ];

    constructor() { }

    public getPersons():Person[]{
        return this.persons;
    }

    public addPerson(person:Person){
        this.persons.push(person);
    }
}
