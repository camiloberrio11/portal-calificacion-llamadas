import { Dbfake } from './simulatedata';
import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-calificacion-llamada',
  templateUrl: './calificacion-llamada.component.html',
  styleUrls: ['./calificacion-llamada.component.scss']
})
export class CalificacionLlamadaComponent implements OnInit {
  listaLlamadas;
  loading: boolean;
  textoBtn: string;

  constructor(
    private dbfake: Dbfake
  ) {
    this.loading = true;
    this.textoBtn = 'Ver calificaciones';
  }

  ngOnInit(): void {
    this.loading = false;
  }

  obtenerCalificaciones(texto: string): void {
    this.loading = true;
    if (texto === 'Ver calificaciones') {
      const respuesta = this.dbfake.respuestaServicio;
      if (respuesta.EsExitoso) {
        this.listaLlamadas = respuesta.Resultado;
        this.textoBtn = 'Limpiar';
        this.loading = false;
      }
    } else {
      this.listaLlamadas = [];
      this.loading = false;
      this.textoBtn = 'Ver calificaciones';
    }
  }


}
