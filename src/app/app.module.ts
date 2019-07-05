import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { ListComponent } from './list/list.component';
import { ImagePipe } from './pipes/image.pipe';
import { AddPersonComponent } from './add-person/add-person.component';
import { LoginComponent } from './login/login.component';
import { DataManagerService } from './services/data-manager.service';
import { AboutComponent } from './about/about.component';
import { HighlightDirective } from './directives/highlight.directive';

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
        HighlightDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule, //configured RouterModule
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
