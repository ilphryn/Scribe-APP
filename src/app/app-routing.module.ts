import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignformComponent } from './views/signalisations/signform/signform.component';
import { SignlistComponent } from './views/signalisations/signlist/signlist.component';



const routes: Routes = [
   { path: 'add-signalisation', component:SignformComponent },
   { path: 'list-signalisation', component:SignlistComponent },

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
