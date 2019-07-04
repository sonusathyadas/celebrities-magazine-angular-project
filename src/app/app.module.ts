import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { ListComponent } from './list/list.component';
import { ImagePipe } from './pipes/image.pipe';
import { AddPersonComponent } from './add-person/add-person.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReversePipe,
    ListComponent,
    ImagePipe,
    AddPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //configured RouterModule
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
