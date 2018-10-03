import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { List2Component } from './list2/list2.component';
import { Tarea2Component } from './tarea2/tarea2.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    List2Component,
    Tarea2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
