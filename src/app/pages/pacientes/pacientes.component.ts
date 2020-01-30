import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

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

  constructor(private router: Router) {

  }

  historia(): void {
    this.router.navigate(["historiaclinica"]);

  }

  cancelar(): void {
    this.router.navigate(["home"]);

  }

  ngOnInit() {
  }

}
