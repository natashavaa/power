import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacienteprocedimiento',
  templateUrl: './pacienteprocedimiento.component.html',
  styleUrls: ['./pacienteprocedimiento.component.css']
})
export class PacienteprocedimientoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  datos(): void {
    this.router.navigate(["historiaclinica"]);
  }

  imagen(): void {
    this.router.navigate(["imagenes"]);
  }

  consulta(): void {
    this.router.navigate(["pacienteconsulta"]);
  }

  procedimiento(): void {
    this.router.navigate(["pacienteprocedimiento"]);
  }

  seguimiento(): void {
    this.router.navigate(["pacienteseguimiento"]);
  }

  odontograma(): void {
    this.router.navigate(["pacienteodontograma"]);
  }

  informacion(): void {
    this.router.navigate(["pacienteinformacion"]);
  }

  historia(): void {
    this.router.navigate(["pacienteprocedimiento"]);
  }

  cancelar(): void {
    this.router.navigate(["pacienteprocedimiento"]);
  }
  recipe(): void {
    this.router.navigate(["pacienterecipe"]);
  }


}
