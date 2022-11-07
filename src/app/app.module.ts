import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersondataComponent } from './persondata/persondata.component';
import { ChildPersonalDataComponent } from './child-personal-data/child-personal-data.component';

@NgModule({
  declarations: [
    AppComponent,
    PersondataComponent,
    ChildPersonalDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
