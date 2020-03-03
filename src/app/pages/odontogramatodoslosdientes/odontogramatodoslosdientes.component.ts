import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-odontogramatodoslosdientes',
  templateUrl: './odontogramatodoslosdientes.component.html',
  styleUrls: ['./odontogramatodoslosdientes.component.css']
})
export class OdontogramatodoslosdientesComponent implements OnInit {


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

  padecimiento(): void {
    this.router.navigate(["pacientepadecimiento"]);
  }

  informacion(): void {
    this.router.navigate(["pacienteinformacion"]);
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

}
