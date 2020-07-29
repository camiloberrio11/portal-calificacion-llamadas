import { Dbfake } from './simulatedata';
import { Component, OnInit } from '@angular/core';
import { CalificacionLlamadaService } from './calificacion-llamada.service';
import Swal from 'sweetalert2';

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
    private dbfake: Dbfake,
    private calificacionLLamadaService: CalificacionLlamadaService
  ) {
    this.loading = true;
    this.textoBtn = 'Ver calificaciones';
  }

  ngOnInit(): void {
    this.loading = false;
    this.saludoInicial();
  }

  saludoInicial(): void {
    Swal.fire({
      title: 'Hola, bienvenido! ',
      confirmButtonText: 'Hacer mi test de llamada',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  }

  obtenerCalificacionesDbFake(texto: string): void {
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

  obtenerCalificacionesService(texto: string): void {
    this.loading = true;
    if (texto === 'Ver calificaciones') {
    this.calificacionLLamadaService.obtenerCalificacionService('').subscribe(dataFinal => {
      console.log(dataFinal)
      if (dataFinal.EsExitoso) {
        this.listaLlamadas = dataFinal.Resultado;
        this.textoBtn = 'Limpiar';
        this.loading = false;
      } else {
        this.listaLlamadas = [];
        this.loading = false;
      }
    },
    error => {
      Swal.fire({
        title: 'Error!',
        text: error,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    });
    } else {
      this.listaLlamadas = [];
      this.loading = false;
      this.textoBtn = 'Ver calificaciones';
    }
  }


}
