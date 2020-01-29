import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacienteinformacion',
  templateUrl: './pacienteinformacion.component.html',
  styleUrls: ['./pacienteinformacion.component.css']
})
export class PacienteinformacionComponent implements OnInit {

  selectedValue: string;
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
  constructor(private router: Router) {

  }

  historia(): void {
    this.router.navigate(["historiaclinica"]);

  }

  cancelar(): void {
    this.router.navigate(["pacientes"]);

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
  
  recipe(): void {
    this.router.navigate(["pacienterecipe"]);
  }

  ngOnInit() {
  }

}
