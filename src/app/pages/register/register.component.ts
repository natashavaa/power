import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



export interface Especialidad {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

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

  especialidades: Especialidad[] = [
    {value: 'o-O', viewValue: 'Odontologia'},
    {value: 'Or-1', viewValue: 'Ortodoncia'},
  ];

  constructor( private router: Router) {

  }
  
  home() : void {
    this.router.navigate(["home"]);
 
}
}