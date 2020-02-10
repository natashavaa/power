import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user.interface';



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

  constructor( private router: Router, private authService: AuthService) {

  }
    private user: UserInterface = {
      id: '',
      name: '',
      dni: '',
      age: 0,
      sex: '',
      mail: '',
      password: '',
      userType: '',
      username: '',
      phone: ''


  };

  selectedValue: string;
  step = 0;

  especialidades: Especialidad[] = [
    {value: 'o-O', viewValue: 'Odontologia'},
    {value: 'Or-1', viewValue: 'Ortodoncia'},
  ];

  onRegister(): void {
      this.authService.registerUser(
        this.user.name,
        this.user.phone,
        this.user.password,
        this.user.dni,
        this.user.age,
        this.user.sex,
        this.user.mail,
        this.user.userType,
        this.user.username
      ).subscribe(user => {
        this.authService.setUser(user);
        let token = this.user.id;
        this.authService.setToken(token);
        this.router.navigate(['pantallahome']);
       } );
      }

  guardar(formulario: NgForm) {
    console.log('Valido', formulario.valid);
    console.log('Valores', formulario.value);
  }
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  home(): void {
    this.router.navigate(['pantallahome']);
}
}
