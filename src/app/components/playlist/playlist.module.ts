import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {FlexLayoutModule} from '@angular/flex-layout';
import{ MatIconModule } from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import{MatDividerModule} from '@angular/material/divider';
import{MatButtonModule } from '@angular/material/button';
import{MatCardModule } from '@angular/material/card';
import { PlaylistComponent } from './playlist.component';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule
    
  ]
})
export class PlaylistModule { }
