import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../helpers/must-match.validator';
import { Router } from '@angular/router';
import { PaatientInterface } from '../../models/patients.interface';

@Component({
  selector: 'app-editarpaciente',
  templateUrl: './editarpaciente.component.html',
  styleUrls: ['./editarpaciente.component.css']
})
export class EditarpacienteComponent implements OnInit {

editForm: FormGroup;
submitted = false;
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
private patient: PaatientInterface;
constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) { }

ngOnInit() {
    this.user = this.authService.getCurrentUser();
    this.patient = this.authService.getCurrentPatient();
}

// convenience getter for easy access to form fields
onUpdate(): void {
  this.authService.updateUser(
    this.user.id,
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
  onUpdatePatient(): void {
    this.authService.UpdatePatient(
    this.patient.id,
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
  ).subscribe(patient => {
    console.log(patient);
    localStorage.removeItem('currentPatient');
    this.router.navigate(['pacientes']);
   } );

  }
}
