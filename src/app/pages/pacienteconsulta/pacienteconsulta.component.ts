import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacienteconsulta',
  templateUrl: './pacienteconsulta.component.html',
  styleUrls: ['./pacienteconsulta.component.css']
})
export class PacienteconsultaComponent implements OnInit {

  constructor(private router: Router) {}

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
  

}
