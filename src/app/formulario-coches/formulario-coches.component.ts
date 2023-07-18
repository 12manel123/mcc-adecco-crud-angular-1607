import { Component, OnInit } from '@angular/core';
import { Data } from '../data.model';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-coches',
  templateUrl: './formulario-coches.component.html',
  styleUrls: ['./formulario-coches.component.css']
})
export class FormularioCochesComponent {
  nuevoDato: Data = { id: 0, modelo: '', marca: '', anio: 0, km: 0 };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getDatoParaEditar().subscribe(coche => {
      if (coche) {
        this.nuevoDato = coche;
      } else {
        this.limpiarFormulario();
      }
    });
  }

  guardarCoche(cocheForm: any) {
    if (cocheForm.form.valid) {
      if (this.nuevoDato.id === 0) {
        // Agregar nuevo coche
        this.dataService.agregarDato(this.nuevoDato);
      } else {
        // Actualizar coche existente
        this.dataService.actualizarDato(this.nuevoDato);
      }
      this.limpiarFormulario();
    }
  }
  agregarOActualizarDato(dataForm: NgForm) {
    if (dataForm.valid) {
      if (this.nuevoDato.id === 0) {
        this.dataService.agregarDato(this.nuevoDato);
      } else {
        this.dataService.actualizarDato(this.nuevoDato);
      }
      this.limpiarFormulario(dataForm);
    }
  }

  limpiarFormulario(cocheForm?: any) {
    this.nuevoDato = { id: 0, modelo: '', marca: '', anio: 0, km: 0 };
    if (cocheForm) {
      cocheForm.resetForm();
    }
    this.dataService.limpiarDatoParaEditar();
  }
}
