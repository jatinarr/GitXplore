import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';

import { NavbarComponent }  from './components/navbar/navbar.component';
import { AboutComponent }  from './components/about/about.component';
import { HomeComponent }  from './components/home/home.component';
import { ContactComponent }  from './components/contact/contact.component';

import {routing} from './app.routing';


@NgModule({
  imports:      [ BrowserModule,routing,HttpModule, FormsModule],
  declarations: [ AppComponent,NavbarComponent,AboutComponent ,HomeComponent,ContactComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
