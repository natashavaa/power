import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaatientInterface } from '../../models/patients.interface';
import { AppComponent } from '../../app.component';
import { DataApiService } from '../../services/data-api.service';
import { AuthService } from '../../services/auth.service';
import { InformeMedicoInterface } from '../../models/informemedico.interface';
import { DatePipe } from '@angular/common';
import { UserInterface } from '../../models/user.interface';

@Component({
  selector: 'app-pacienteinforme',
  templateUrl: './pacienteinforme.component.html',
  styleUrls: ['./pacienteinforme.component.css']
})
export class PacienteinformeComponent implements OnInit {

  constructor(private router: Router, public datepipe: DatePipe,
              private dataApi: DataApiService, private authService: AuthService, private app: AppComponent) { }
  private patient: PaatientInterface;
  private user: UserInterface;
  public startDate: Date;
  private informeRe: InformeMedicoInterface = {
    PorPresentar: '',
    DiagnosticoDefinitivo: '',
    Firma: '',
    Certificoqueeldia: '',
    AtendiA: '',
    idPatient: '',
    idDoctor: '',
  };
  private informeRecibido: InformeMedicoInterface = {
    PorPresentar: '',
    DiagnosticoDefinitivo: '',
    Firma: '',
    Certificoqueeldia: '',
    AtendiA: '',
    idPatient: '',
    idDoctor: '',
  };
  onRegisterInforme() {
    const fechaInicio = this.datepipe.transform(this.startDate, 'dd-MM-yyyy');
    this.informeRe.Certificoqueeldia = fechaInicio;
    this.informeRe.idPatient = this.patient.id;
    this.informeRe.idDoctor = this.user.id;
    this.informeRe.AtendiA = this.patient.name;
    this.authService.registerInforme(
      this.informeRe.PorPresentar,
      this.informeRe.DiagnosticoDefinitivo,
      this.informeRe.Firma,
      this.informeRe.Certificoqueeldia,
      this.informeRe.AtendiA,
      this.informeRe.idPatient,
      this.informeRe.idDoctor,
    ).subscribe(user => {
      this.ngOnInit();
      this.router.navigate(['historiaclinica']);
     } );

  }

  getlistAllInformepatients() {
    this.dataApi.getAllInformePatient(this.patient.id)
    .subscribe((informes: InformeMedicoInterface) => ( this.informeRecibido = informes));
  }
  datos(): void {
    this.router.navigate(['historiaclinica']);
  }

  imagen(): void {
    this.router.navigate(['imagenes']);
  }

  consulta(): void {
    this.router.navigate(['pacienteconsulta']);
  }

  procedimiento(): void {
    this.router.navigate(['pacienteprocedimiento']);
  }

  seguimiento(): void {
    this.router.navigate(['pacienteseguimiento']);
  }

  odontograma(): void {
    this.router.navigate(['pacienteodontograma']);
  }

  informacion(): void {
    this.router.navigate(['pacienteinformacion']);
  }

  recipe(): void {
    this.router.navigate(['pacienterecipe']);
  }

  presupuesto(): void {
    this.router.navigate(['pacientepresupuesto']);
  }

  informe(): void {
    this.router.navigate(['pacienteinforme']);
  }

  ngOnInit() {
    this.app.mostrar = true;
    this.patient = this.authService.getCurrentPatient();
    this.user = this.authService.getCurrentUser();
    this.informeRe.AtendiA = this.patient.name;
    this.getlistAllInformepatients();
    }

}
