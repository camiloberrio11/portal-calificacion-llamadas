import { CalificacionLlamadaComponent } from './calificacion-llamada/calificacion-llamada.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: CalificacionLlamadaComponent },
  { path: 'llamadas', component: CalificacionLlamadaComponent },
  { path: '**', component: CalificacionLlamadaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
