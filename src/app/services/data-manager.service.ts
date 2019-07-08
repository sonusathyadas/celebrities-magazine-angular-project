import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataManagerService {

    // private persons: Person[] = [
    //     { id:1,  firstName: 'Amitab', lastName: 'Bachchan', age: 72, profession: 'Actor', imageUrl: 'assets/amitab.jpg' },
    //     { id:2,  firstName: 'Virat', lastName: 'Kohli', age: 31, profession: 'Cricket', imageUrl: 'assets/virat-kohli.jpg' },
    //     { id:3,  firstName: 'Shreya', lastName: 'Ghoshal', age: 36, profession: 'Singer', imageUrl: '' },
    //     { id:4,  firstName: 'Sourav', lastName: 'Ganguly', age: 45, profession: 'Cricket', imageUrl: 'assets/ganguly.jpg' }
    // ];

    constructor(private http:HttpClient) { }

    private readonly BASEURL:string="http://localhost:3000/persons";

    public getPersons():Observable<Person[]>{
        return this.http.get<Person[]>(this.BASEURL);
    }

    public addPerson(person:Person):Observable<Person>{
        return this.http.post<Person>(this.BASEURL, person)
    }

    public getPerson(id:number):Observable<Person>{
        //http://localhost:3000/persons/2
        return this.http.get<Person>(`${this.BASEURL}/${id}`);
    }
}
