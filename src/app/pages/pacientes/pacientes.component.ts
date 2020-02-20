import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { PaatientInterface } from '../../models/patients.interface';
import { DataApiService } from '../../services/data-api.service';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user.interface';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent {

  constructor(private router: Router, private dataApi: DataApiService, private auth: AuthService) {

  }
  public user: UserInterface = {
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

  pacientes(): void {
    this.router.navigate(['registerpaciente']);

  }

  historia(patient: PaatientInterface): void {
    this.auth.setPatient(patient);
    this.router.navigate(['historiaclinica']);

  }

  editarpaciente(patient: PaatientInterface): void {
    this.auth.setPatient(patient);
    this.router.navigate(['editarpaciente']);

  }
  ngOnInit() {
    this.getlistPatients();
    this.doctor();
}
getlistPatients() {
  this.dataApi.getAllPatints().subscribe((patients: PaatientInterface) => ( this.patient = patients));
  console.log(this.patient);
  console.log('lista recibida');
}
doctor() {
  this.user = this.auth.getCurrentUser();
  console.log(this.user);

}
}
