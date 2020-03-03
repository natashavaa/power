import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacienteinforme',
  templateUrl: './pacienteinforme.component.html',
  styleUrls: ['./pacienteinforme.component.css']
})
export class PacienteinformeComponent implements OnInit {

  constructor(private router: Router) { }


  datos(): void {
    this.router.navigate(['historiaclinica']);
  }

  imagen(): void {
    this.router.navigate(['imagenes']);
  }

  consulta(): void {
    this.router.navigate(['pacienteconsulta']);
  }

  procedimiento(): void {
    this.router.navigate(['pacienteprocedimiento']);
  }

  seguimiento(): void {
    this.router.navigate(['pacienteseguimiento']);
  }

  odontograma(): void {
    this.router.navigate(['pacienteodontograma']);
  }

  informacion(): void {
    this.router.navigate(['pacienteinformacion']);
  }

  recipe(): void {
    this.router.navigate(['pacienterecipe']);
  }
  
  presupuesto(): void {
    this.router.navigate(['pacientepresupuesto']);
  }

  informe(): void {
    this.router.navigate(['pacienteinforme']);
  }

  ngOnInit() {
  }

}
