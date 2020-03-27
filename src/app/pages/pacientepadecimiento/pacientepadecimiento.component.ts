import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaatientInterface } from '../../models/patients.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pacientepadecimiento',
  templateUrl: './pacientepadecimiento.component.html',
  styleUrls: ['./pacientepadecimiento.component.css']
})
export class PacientepadecimientoComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  private patient: PaatientInterface = {};
  ngOnInit() {
    this.patient = this.auth.getCurrentPatient();

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

  padecimiento(): void {
    this.router.navigate(["pacientepadecimiento"]);
  }

  informacion(): void {
    this.router.navigate(["pacienteinformacion"]);
  }

  historia(): void {
    this.router.navigate(["historiaclinica"]);

  }

  cancelar(): void {
    this.router.navigate(["pacientes"]);

  }

  recipe(): void {
    this.router.navigate(["pacienterecipe"]);
  }


  presupuesto(): void {
    this.router.navigate(['pacientepresupuesto']);
  }


  informe(): void {
    this.router.navigate(['pacienteinforme']);
  }

  verservicios(): void {
    this.router.navigate(['verservicios']);
  }

}
