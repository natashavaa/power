import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PaatientInterface } from '../../models/patients.interface';
import { AuthService } from '../../services/auth.service';
import { AppComponent } from '../../app.component';
import { DataApiService } from '../../services/data-api.service';
import { HistotialClinicoInterface } from '../../models/historialclinico.interface';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})

export class HistoriaComponent implements OnInit {


  constructor(private dataApi: DataApiService, private router: Router, private auth: AuthService, private app: AppComponent) { }

  private patient: PaatientInterface;
  private historialRec: HistotialClinicoInterface = {

    idPatient: '',
    Labios: '',
    Carrillos: '',
    Paladar: '',
    Lengua: '',
    PisodelaBoca: '',
    Mucosa: '',
    Encias: '',
    Calculos: '',
    Ganglios: '',
    OtroMotivo: '',
    complicacionesanestesia: '',
    FiebreReumatica: '',
    Diabetes: '',
    Cardiopatias: '',
    Tbc: '',
    Artritis: '',
    Hemorragias: '',
    Neuralgias: '',
    Sinusitiss: '',
    Renales: '',
    Alergias: '',
    Otra: '',
    Observaciones: '',
  };
  private historial: HistotialClinicoInterface = {

    idPatient: '',
    Labios: '',
    Carrillos: '',
    Paladar: '',
    Lengua: '',
    PisodelaBoca: '',
    Mucosa: '',
    Encias: '',
    Calculos: '',
    Ganglios: '',
    OtroMotivo: '',
    complicacionesanestesia: '',
    FiebreReumatica: '',
    Diabetes: '',
    Cardiopatias: '',
    Tbc: '',
    Artritis: '',
    Hemorragias: '',
    Neuralgias: '',
    Sinusitiss: '',
    Renales: '',
    Alergias: '',
    Otra: '',
    Observaciones: '',
  };
  problemasconAnestesia = false;
  enfermedadesproblema = false;
  fiebrereumatica = false;
  Diabetes = false;
  Cardiopatias = false;
  Tbc = false;
  Artritis = false;
  Hemorragias = false;
  Neuralgias = false;
  Sinusitiss = false;
  Renales = false;
  Alergias = false;
  getHistoria() {
    this.patient = this.auth.getCurrentPatient();
    this.dataApi.getAllHistorialBypatient(this.patient.id)
    .subscribe((historialRec: HistotialClinicoInterface) => {
      if (historialRec.idPatient) {
       this.historial = historialRec;
       console.log(historialRec);
       if (Object.is(historialRec.complicacionesanestesia, 'Si')) {
        this.problemasconAnestesia = true;
       }
       // tslint:disable-next-line: max-line-length
       if (Object.is(historialRec.FiebreReumatica, 'Si')  || Object.is(historialRec.Diabetes, 'Si') || Object.is(historialRec.Cardiopatias, 'Si') || Object.is(historialRec.Tbc, 'Si') || Object.is(historialRec.Artritis, 'Si') || Object.is(historialRec.Hemorragias, 'Si') || Object.is(historialRec.Neuralgias, 'Si')|| Object.is(historialRec.Sinusitiss, 'Si')|| Object.is(historialRec.Renales, 'Si') || Object.is(historialRec.Alergias, 'Si')) {
        this.enfermedadesproblema = true;
       }
       if (Object.is(historialRec.FiebreReumatica, 'Si')) {
        this.fiebrereumatica = true;
       }
       if (Object.is(historialRec.Diabetes, 'Si')) {
        this.Diabetes = true;
       }
       if (Object.is(historialRec.Cardiopatias, 'Si')) {
        this.Cardiopatias = true;
       }
       if (Object.is(historialRec.Tbc, 'Si')) {
        this.Tbc = true;
       }
       if (Object.is(historialRec.Artritis, 'Si')) {
        this.Artritis = true;
       }
       if (Object.is(historialRec.Hemorragias, 'Si')) {
        this.Hemorragias = true;
       }
       if (Object.is(historialRec.Neuralgias, 'Si')) {
        this.Neuralgias = true;
       }
       if (Object.is(historialRec.Sinusitiss, 'Si')) {
        this.Sinusitiss = true;
       }
       if (Object.is(historialRec.Renales, 'Si')) {
        this.Renales = true;
       }
       if (Object.is(historialRec.Alergias, 'Si')) {
        this.Alergias = true;
       }
      }
    } );
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
    this.patient = this.auth.getCurrentPatient();
    this.getHistoria();
  }

}
