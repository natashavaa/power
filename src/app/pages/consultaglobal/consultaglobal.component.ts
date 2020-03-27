import {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DataApiService } from '../../services/data-api.service';
import { PaatientInterface } from '../../models/patients.interface';
import { ConsultaInterface } from 'src/app/models/consulta.interface';
import { UserInterface } from '../../models/user.interface';
import { DatePipe } from '@angular/common';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-consultaglobal',
  styleUrls: ['./consultaglobal.component.css'],
  templateUrl: './consultaglobal.component.html'
})
export class ConsultaglobalComponent implements OnInit {
  [x: string]: any;


  constructor(private router: Router, private  authService: AuthService, private dataApi: DataApiService, public datepipe: DatePipe,
              private app: AppComponent) {}
    dni: string;
    MostrarForm: boolean;
    fecha = Date;
    hora: string;
    private doctorUser: UserInterface = {};
    private user: UserInterface = {
    };
    private patient: PaatientInterface = {
      dni: '',
    };
    private consulta: ConsultaInterface = {
      idDoctor: '',
      idSpeciality: '',
      idClinicHistory: '',
      fechaPlanificada: '',
      hora: '',
      motive: '',
      status: '',
      consultorioVisitar: '',
    };
    private consultal: ConsultaInterface = {
      idDoctor: '',
      idSpeciality: '',
      idClinicHistory: '',
      fechaPlanificada: '',
      hora: '',
      motive: '',
      status: '',
      consultorioVisitar: '',
    };
    public patientf: PaatientInterface = {
      dni : '',
      name : '',
      age: 0,
      sex: '',
      statusC: '',
      homeAddress: '',
      occupation : '',
      workAddress: '',
      mobile: '',
      birthplace: '',
      sentBy: '',
      dentalColor: '',
      familyNumber: '',
      familyNumberHome: '',
      familyName: '',
      password: '',
      username: '',
      mail: '',
      userType: '',
      phone: '',
    };
    private patientdeconsulta: PaatientInterface = {
      dni : '',
      name : '',
      age: 0,
      sex: '',
      statusC: '',
      homeAddress: '',
      occupation : '',
      workAddress: '',
      mobile: '',
      birthplace: '',
      sentBy: '',
      dentalColor: '',
      familyNumber: '',
      familyNumberHome: '',
      familyName: '',
      password: '',
      username: '',
      mail: '',
      userType: '',
      phone: '',
    };
  ngOnInit() {
    this.app.mostrar = true;
    this.patientdeconsulta = this.authService.getCurrentPatientConsulta();
    this.getlistUsers();
    this.validarque();
  }
  validarque() {
    if (this.patientdeconsulta) {
      this.patientf = this.patientdeconsulta;
      this.MostrarForm =  true;
    }
  }
  onSearch(): void {
    this.MostrarForm =  false;
    if (!this.patient.dni) {
    alert('Ingrese Cedula para buscar paciente');
   } else if (this.patient.dni) {
    this.dataApi.getPatientByDni(this.patient.dni).subscribe((patients: PaatientInterface) => {
       this.patientf = patients;
       if (this.patientf) {
         this.MostrarForm = true;
       } else {
        alert('Paciente No registrado');
        this.router.navigate(['registerpaciente']);
       }
    });
   }
}
getlistUsers() {
  this.dataApi.getAllUserConPermiso().subscribe((doctorUser: UserInterface) => ( this.doctorUser = doctorUser));
}
onRegisterConsulta(): void {
  this.user = this.authService.getCurrentUser();
  this.consulta.idDoctor = this.user.id;
  this.consulta.idSpeciality = this.user.id; //  cambiar mas adelante
  this.consulta.idClinicHistory = this.user.id; //  cambiar mas adelante
  this.consulta.idPatient = this.patientf.id;
  this.consulta.namePatient = this.patientf.name;
  this.consulta.dniPatient = this.patientf.dni;
  this.consulta.fechaPlanificada = this.datepipe.transform(this.fecha, 'dd-MM-yyyy');
  this.consulta.hora = this.hora;
  this.consulta.status = 'PROGRAMADA';
  this.consulta.hora = this.hora;
  this.consulta.mes = this.datepipe.transform(this.fecha, 'MM');
  this.consulta.dia = this.datepipe.transform(this.fecha, 'EEEE');
  if (Object.is(this.consulta.dia, 'Monday')) {
    this.consulta.dia = 'Lunes';
  } else if (Object.is(this.consulta.dia, 'Tuesday')) {
    this.consulta.dia = 'Martes';
  } else if (Object.is(this.consulta.dia, 'Wednesday')) {
    this.consulta.dia = 'Miercoles';
  } else if (Object.is(this.consulta.dia, 'Thursday')) {
    this.consulta.dia = 'Jueves';
  } else if (Object.is(this.consulta.dia, 'Friday')) {
    this.consulta.dia = 'Viernes';
  }  else if (Object.is(this.consulta.dia, 'Saturday')) {
    this.consulta.dia = 'Sabado';
  } else if (Object.is(this.consulta.dia, 'Sunday')) {
    this.consulta.dia = 'Domingo';
  }
  this.authService.registerConsulta(
    this.consulta.idDoctor,
    this.consulta.idSpeciality ,
    this.consulta.idClinicHistory ,
    this.consulta.idPatient ,
    this.consulta.namePatient ,
    this.consulta.dniPatient,
    this.consulta.fechaPlanificada,
    this.consulta.hora ,
    this.consulta.motive,
    this.consulta.status,
    this.consulta.consultorioVisitar,
    this.consulta.mes,
    this.consulta.dia,
    this.consulta.atendidoPor,
  ).subscribe(consulta => {
    localStorage.removeItem('currentPatientConsulta');
    this.router.navigate(['diaria']);
  } );
}
getlistConsultas() {
  this.dataApi.getAllconsultas().subscribe((cosultas: ConsultaInterface) => ( this.consultal = cosultas));
}
}
/**/
