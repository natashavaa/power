import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

function mostrar(id: string) {
  if (id == "todos") {
    this.router.navigate(["todoslosdientes"]);
  } else {
    this.router.navigate(["odontograma"]);
  }
}

@Component({
  selector: 'app-odontogramatodoslosdientes',
  templateUrl: './odontogramatodoslosdientes.component.html',
  styleUrls: ['./odontogramatodoslosdientes.component.css']
})
export class OdontogramatodoslosdientesComponent implements OnInit {

  hide = true;


  constructor(private router: Router) { }

  diente: string;

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

}
