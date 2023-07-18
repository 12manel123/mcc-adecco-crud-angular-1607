import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCochesComponent } from './lista-coches/lista-coches.component';
import { FormularioCochesComponent } from './formulario-coches/formulario-coches.component';

const routes: Routes = [
  { path: '', redirectTo: '/lista-coches', pathMatch: 'full' },
  { path: 'lista-coches', component: ListaCochesComponent },
  { path: 'formulario-coches', component: FormularioCochesComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
