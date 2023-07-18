import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCochesComponent } from './lista-coches/lista-coches.component';
import { FormularioCochesComponent } from './formulario-coches/formulario-coches.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCochesComponent,
    FormularioCochesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
