import { Component, OnInit } from '@angular/core';
import { Data } from '../data.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lista-coches',
  templateUrl: './lista-coches.component.html',
  styleUrls: ['./lista-coches.component.css']
})
export class ListaCochesComponent {
  coches: Data[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.coches = this.dataService.getDatos();
  }

  editarCoche(coche: Data) {
    this.dataService.setDatoParaEditar(coche);
  }

  eliminarCoche(id: number) {
    this.dataService.eliminarDato(id);
  }
}
