import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registropaciente',
  templateUrl: './registropaciente.component.html',
  styleUrls: ['./registropaciente.component.css']
})
export class RegistropacienteComponent implements OnInit {

  
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

  ngOnInit() {
  }

}
