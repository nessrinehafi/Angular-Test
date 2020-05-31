import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCartComponent } from './components/list-cart/list-cart.component';
import { PlaylistComponent } from './components/playlist/playlist.component';


const routes: Routes = [
  {path:"" , component:ListCartComponent},
  {path:"section2" , component:PlaylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
