import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { ListComponent } from './components/list/list.component';
import { ImagePipe } from './pipes/image.pipe';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { PersonResolverService } from './resolvers/person-resolver.service';
import { PersonGuardService } from './guards/person-guard.service';
import { BasePersonComponent } from './components/base-person/base-person.component';
import { AuthGuardService } from './guards/auth-guard.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ReversePipe,
        ListComponent,
        ImagePipe,
        AddPersonComponent,
        LoginComponent,
        AboutComponent,
        HighlightDirective,
        PersonDetailComponent,
        EditPersonComponent,
        BasePersonComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule, //configured RouterModule
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass:AuthInterceptorService, multi:true },
        PersonResolverService,
        PersonGuardService,
        AuthGuardService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
