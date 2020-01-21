import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Consultorio {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent {

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

  consultorios: Consultorio[] = [
    { value: 'o-O', viewValue: 'Odontologia' },
    { value: 'Or-1', viewValue: 'Ortodoncia' },
  ];

  constructor(private router: Router) {

  }

  historia(): void {
    this.router.navigate(["historiaclinica"]);

  }

  cancelar(): void {
    this.router.navigate(["pacientes"]);

  }

  ngOnInit() {
  }

}
