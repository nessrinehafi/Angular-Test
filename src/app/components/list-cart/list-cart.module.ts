import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { ListCartComponent } from './list-cart.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {FlexLayoutModule} from '@angular/flex-layout';
import{ MatIconModule } from '@angular/material/icon';
import{MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import{MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [ListCartComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatSnackBarModule
    
  ]
})
export class ListCartModule { }
