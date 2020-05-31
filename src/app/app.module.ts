import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListCartComponent } from './components/list-cart/list-cart.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import{MatToolbarModule } from '@angular/material/toolbar';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {FlexLayoutModule} from '@angular/flex-layout';
import{ MatIconModule } from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import{MatDividerModule} from '@angular/material/divider';
import{MatButtonModule } from '@angular/material/button';
import{MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { PlaylistComponent } from './components/playlist/playlist.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import { ReactiveFormsModule } from '@angular/forms';
import { PlaylistService } from './components/shared/playlist.service';

@NgModule({
  declarations: [
    AppComponent,
    
    NavbarComponent,
    
    DialogComponent,
    PlaylistComponent,
    ListCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
  MatInputModule,
    MatButtonModule,
  FormsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[DialogComponent]
})
export class AppModule { }
