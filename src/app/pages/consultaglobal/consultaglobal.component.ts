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
    private patientf: PaatientInterface = {
      dni : '',
      name : '',
      age: 0,
      sex: '',
      statusC: '',
      homeAddress: '',
      occupation : '',
      workAddress: '',
      mobile: 0,
      birthplace: '',
      sentBy: '',
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
  ngOnInit() {
    this.app.mostrar = true;
  }
  onSearch(): void {
    this.MostrarForm =  false;
    if (!this.patient.dni) {
    alert('Ingrese Cedula para buscar paciente');
   } else if (this.patient.dni) {
    this.dataApi.getPatientByDni(this.patient.dni).subscribe((patients: PaatientInterface) => {
       this.patientf = patients;
       console.log(this.patientf);
       if (this.patientf) {
         this.MostrarForm = true;
       } else {
        alert('Paciente No registrado');
        this.router.navigate(['registerpaciente']);
       }
    });
   }
}
onRegisterConsulta(): void {
  this.user = this.authService.getCurrentUser();
  this.consulta.idDoctor = this.user.id;
  this.consulta.idSpeciality = this.user.id; //  cambiar mas adelante
  this.consulta.idClinicHistory = this.user.id; //  cambiar mas adelante
  this.consulta.fechaPlanificada = this.datepipe.transform(this.fecha, 'yyyy-MM-dd');
  this.consulta.status = 'PROGRAMADA';
  this.consulta.hora = this.hora;
  this.consulta.dni = this.patientf.dni;
  this.consulta.name = this.patientf.name,
  this.consulta.age = this.patientf.age,
  this.consulta.sex = this.patientf.sex,
  this.consulta.statusC = this.patientf.statusC,
  this.consulta.homeAddress = this.patientf.homeAddress,
  this.consulta.occupation = this.patientf.occupation,
  this.consulta.workAddress = this.patientf.workAddress,
  this.consulta.mobile = this.patientf.mobile,
  this.consulta.birthplace = this.patientf.birthplace,
  this.consulta.sentBy = this.patientf.sentBy,
  this.consulta.dentalColor = this.patientf.dentalColor,
  this.consulta.familyNumber = this.patientf.familyNumber,
  this.consulta.familyName = this.patientf.familyName,
  this.consulta.familyNumberHome = this.patientf.familyNumberHome,
  this.consulta.password = this.patientf.password,
  this.consulta.username = this.patientf.username,
  this.consulta.mail = this.patientf.mail,
  this.consulta.phone = this.patientf.phone,
  console.log(this.consulta);
  this.authService.registerConsulta(
    this.consulta
  ).subscribe(consulta => {
    console.log(consulta);
    this.router.navigate(['diaria']);
  } );
}
}
/**/
