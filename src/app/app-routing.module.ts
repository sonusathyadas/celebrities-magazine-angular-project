import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { PersonResolverService } from './resolvers/person-resolver.service';
import { PersonGuardService } from './guards/person-guard.service';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
    { path: "", component: HomeComponent, pathMatch: "full" }, //http://localhost:4200/
    { path: "persons", component: ListComponent }, //http://localhost:4200/persons
    { 
        path: "persons/new", 
        component: AddPersonComponent,
        canActivate:[AuthGuardService],
        canDeactivate:[PersonGuardService]
    },
    { path: "login", component: LoginComponent },
    { path: "about", component: AboutComponent },
    { path: "detail/:id", component: PersonDetailComponent },
    {
        path: "edit/:id",
        component: EditPersonComponent,
        resolve: {
            resolvedPerson:PersonResolverService
        }
    },
    { path: "**", redirectTo: "" } //invalid urls (Code : 404)
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
