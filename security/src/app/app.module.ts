import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  providers: [CommonModule, RouterOutlet],
  bootstrap: []
})
export class AppModule { }
