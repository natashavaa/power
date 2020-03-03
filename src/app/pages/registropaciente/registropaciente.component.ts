import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { PaatientInterface } from '../../models/patients.interface';
import { UserInterface } from 'src/app/models/user.interface';

@Component({
  selector: 'app-registropaciente',
  templateUrl: './registropaciente.component.html',
  styleUrls: ['./registropaciente.component.css']
})
export class RegistropacienteComponent implements OnInit {

  constructor(private router: Router,  private authService: AuthService) { }

  selectedValue: string;
  step = 0;

  private patient: PaatientInterface = {
    name: '',
    dni: '',
    age: 0,
    sex: '',
    statusC: '',
    homeAddress: '',
    occupation : '',
    workAddress: '',
    mobile: 0,
    birthplace: '',
    sentBy: '',
    registradoPor: '',
    dentalColor: '',
    familyNumber: 0,
    familyNumberHome: 0,
    familyName: '',
    password: '',
    username: '',
    mail: '',
    userType: '',
    phone: '',
  };
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
  onRegisterPatient(): void {
    this.patient.registradoPor  = this.user.name;
    this.authService.registerPatient(
      this.patient.name,
      this.patient.dni,
      this.patient.age,
      this.patient.sex,
      this.patient.statusC,
      this.patient.homeAddress,
      this.patient.occupation,
      this.patient.workAddress,
      this.patient.mobile,
      this.patient.birthplace,
      this.patient.sentBy,
      this.patient.dentalColor,
      this.patient.familyNumber,
      this.patient.familyName,
      this.patient.familyNumberHome,
      this.patient.password,
      this.patient.username,
      this.patient.mail,
      this.patient.userType,
      this.patient.phone,
      this.patient.registradoPor,
    ).subscribe(patient => {
      this.router.navigate(['pacientes']);
     } );
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

  historia(): void {
    this.router.navigate(['historiaclinica']);

  }

  cancelar(): void {
    this.router.navigate(['pacientes']);

  }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
  }

}
