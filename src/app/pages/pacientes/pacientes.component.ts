import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { PaatientInterface } from '../../models/patients.interface';
import { DataApiService } from '../../services/data-api.service';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user.interface';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent {

  constructor(private router: Router,
              private dataApi: DataApiService,
              private auth: AuthService,
              private app: AppComponent) {

  }
  private doctorP: UserInterface = {
    name: '',
  };
  private doctorUser: UserInterface = {};
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

     usuarioA: string;
     especialidad: string;

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
  getlistUsers() {
    // tslint:disable-next-line: max-line-length
    this.dataApi.getAllUserConPermiso().subscribe((doctorUser: UserInterface) => { this.doctorUser = doctorUser; } );
  }
  ngOnInit() {
    this.app.mostrar = true;
    this.getlistPatients();
    this.getlistUsers();
    this.doctor();
}
getlistPatients() {
  this.dataApi.getAllPatints().subscribe((patients: PaatientInterface) => ( this.patient = patients));
}
getlistPatientsByDoctor() {
  this.dataApi.getPatientsByDoctor(this.doctorP.name).subscribe((patients: PaatientInterface) => ( this.patient = patients));
}
getPatientByDoctor(): void {
  if (Object.is(this.doctorP.name, 'Todos')) {
    this.getlistPatients();
} else {
this.getlistPatientsByDoctor();
}

}
doctor(): string {
  this.user = this.auth.getCurrentUser();
  if (Object.is(this.user.username, 'admin')) {
      this.usuarioA = 'Administrador';
      return this.usuarioA;
  } else {
    this.usuarioA = 'Doctor : ' + this.user.name;
    this.especialidad = 'Especialidad : ' +  this.user.userType;
    return  this.usuarioA;

  }
}
}
