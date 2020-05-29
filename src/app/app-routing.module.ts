import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCartComponent } from './components/list-cart/list-cart.component';
import { Task2Component } from './components/task2/task2.component';


const routes: Routes = [
  {path:"" , component:ListCartComponent},
  {path:"task2" , component:Task2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
