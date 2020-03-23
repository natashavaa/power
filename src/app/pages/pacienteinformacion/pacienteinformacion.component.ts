import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaatientInterface } from '../../models/patients.interface';
import { AppComponent } from '../../app.component';
import { AuthService } from '../../services/auth.service';
import { HistotialClinicoInterface } from '../../models/historialclinico.interface';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-pacienteinformacion',
  templateUrl: './pacienteinformacion.component.html',
  styleUrls: ['./pacienteinformacion.component.css']
})
export class PacienteinformacionComponent implements OnInit {
  private patient: PaatientInterface;
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
  selectedValue: string;
  step = 0;

  setStep(index: number) {
    this.step = index;
  }
  onRegisterhistorial(): void {
    this.historial.idPatient = this.patient.id;
    if (this.historialRec.idPatient) {
      this.auth.UpdateHistorial(
        this.historialRec.id,
        this.historial.idPatient,
        this.historial.Labios,
        this.historial.Carrillos,
        this.historial.Paladar,
        this.historial.Lengua,
        this.historial.PisodelaBoca,
        this.historial.Mucosa,
        this.historial.Encias,
        this.historial.Calculos,
        this.historial.Ganglios,
        this.historial.OtroMotivo,
        this.historial.complicacionesanestesia,
        this.historial.FiebreReumatica,
        this.historial.Diabetes,
        this.historial.Cardiopatias,
        this.historial.Tbc,
        this.historial.Artritis,
        this.historial.Hemorragias,
        this.historial.Neuralgias,
        this.historial.Sinusitiss,
        this.historial.Renales,
        this.historial.Alergias,
        this.historial.Otra,
        this.historial.Observaciones,
      ).subscribe(historila => {

        this.router.navigate(['historiaclinica']);
       } );
    } else {
      this.auth.registerHistorial(
        this.historial.idPatient,
        this.historial.Labios,
        this.historial.Carrillos,
        this.historial.Paladar,
        this.historial.Lengua,
        this.historial.PisodelaBoca,
        this.historial.Mucosa,
        this.historial.Encias,
        this.historial.Calculos,
        this.historial.Ganglios,
        this.historial.OtroMotivo,
        this.historial.complicacionesanestesia,
        this.historial.FiebreReumatica,
        this.historial.Diabetes,
        this.historial.Cardiopatias,
        this.historial.Tbc,
        this.historial.Artritis,
        this.historial.Hemorragias,
        this.historial.Neuralgias,
        this.historial.Sinusitiss,
        this.historial.Renales,
        this.historial.Alergias,
        this.historial.Otra,
        this.historial.Observaciones,
      ).subscribe(historila => {

        this.router.navigate(['historiaclinica']);
       } );
    }
    }
  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor(private dataApi: DataApiService, private router: Router, private auth: AuthService, private app: AppComponent) {

  }

  historia(): void {
    this.router.navigate(['historiaclinica']);

  }

  cancelar(): void {
    this.router.navigate(['historiaclinica']);

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
  getHistoria() {
    this.patient = this.auth.getCurrentPatient();
    this.dataApi.getAllHistorialBypatient(this.patient.id)
    .subscribe((historialRec: HistotialClinicoInterface) => {
      if (historialRec.idPatient) {
        this.historialRec = historialRec;
        this.historial =  historialRec;
      } else {}
    } );
  }

}
