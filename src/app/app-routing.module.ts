import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { AddPersonComponent } from './add-person/add-person.component';

const routes: Routes = [
    { path:"", component:HomeComponent, pathMatch:"full"}, //http://localhost:4200/
    { path:"persons", component:ListComponent}, //http://localhost:4200/persons
    { path:"persons/new", component:AddPersonComponent},
    { path:"**", redirectTo:""} //invalid urls (Code : 404)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
