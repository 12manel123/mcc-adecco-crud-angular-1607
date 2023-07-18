import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Data } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private datos: Data[] = [];
  private datoParaEditar: BehaviorSubject<Data | null> = new BehaviorSubject<Data | null>(null);

  constructor() {
    this.cargarDatosIniciales();
    this.cargarDatosGuardados();
  }

  cargarDatosIniciales() {
    this.datos = [
      { id: 1, modelo: 'Mercedes', marca: 'm', anio: 2020, km: 5000 },
      { id: 2, modelo: 'Venz', marca: 'v', anio: 2022, km: 2000 },
      { id: 3, modelo: 'Lamborghini', marca: 'l', anio: 2021, km: 100 }
    ];
  }

  cargarDatosGuardados() {
    const datosGuardados = localStorage.getItem('datos');
    if (datosGuardados) {
      this.datos = JSON.parse(datosGuardados);
    }
  }

  guardarDatos() {
    localStorage.setItem('datos', JSON.stringify(this.datos));
  }

  getDatos(): Data[] {
    return this.datos;
  }

  agregarDato(nuevoDato: Data) {
    const nuevoId = this.generarNuevoId();
    nuevoDato.id = nuevoId;
    this.datos.push(nuevoDato);
    this.guardarDatos();
  }

  eliminarDato(id: number) {
    const index = this.datos.findIndex(dato => dato.id === id);
    if (index !== -1) {
      this.datos.splice(index, 1);
      this.guardarDatos();
    }
  }

  actualizarDato(datoActualizado: Data) {
    const index = this.datos.findIndex(dato => dato.id === datoActualizado.id);
    if (index !== -1) {
      this.datos[index] = datoActualizado;
      this.guardarDatos();
    }
  }

  getDatoParaEditar(): Observable<Data | null> {
    return this.datoParaEditar.asObservable();
  }

  setDatoParaEditar(dato: Data | null) {
    this.datoParaEditar.next(dato);
  }

  limpiarDatoParaEditar() {
    this.datoParaEditar.next(null);
  }

  private generarNuevoId(): number {
    const ids = this.datos.map(dato => dato.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  }
}