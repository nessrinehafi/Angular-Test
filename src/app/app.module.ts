import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListCartComponent } from './components/list-cart/list-cart.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { Task2Component } from './components/task2/task2.component';
import{MatToolbarModule } from '@angular/material/toolbar';
import{MatButtonModule } from '@angular/material/button';
import { ListCartModule } from './components/list-cart/list-cart.module';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    
    NavbarComponent,
    Task2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    ListCartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
