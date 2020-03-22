import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { PaatientInterface } from '../../models/patients.interface';
import { DataApiService } from '../../services/data-api.service';
import { OdontogramaInterface } from '../../models/odontograma.interface';
import { ProcedimientoApadecimentoInterface } from '../../models/procedimientoapadecimiento.interface';
import { FormularioInterface } from '../../models/formulario.interface';
import { SeguimientoDienteInterface } from '../../models/seguimientodiente.interdace';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pacienteseguimientodetalle',
  templateUrl: './pacienteseguimientodetalle.component.html',
  styleUrls: ['./pacienteseguimientodetalle.component.css']
})
export class PacienteseguimientodetalleComponent implements OnInit {

  constructor(private router: Router, private app: AppComponent, private auth: AuthService, private dataApi: DataApiService,
              private _sanitizer: DomSanitizer,  public datepipe: DatePipe) { }
private patient: PaatientInterface = {};
private seguimientoRe: SeguimientoDienteInterface = {};
private seguimientodeOdontograma: SeguimientoDienteInterface = {};
private odontogramaoficial: OdontogramaInterface = {};
public procedimientoaPad: ProcedimientoApadecimentoInterface = {
  id: '',
  NombreProcedimiento: '',
  Descripcion      : '',
  Estatus: '',
  costo: '',
  NombrePadecimiento: '',
  NombrePieza: '',
  Imagen: '',
  materiales: '',
  instrumentos: '',

};
fecha = Date;
private formulario: FormularioInterface = {
  piezaux: '',
  padecimientoaux: '',
  posicionaux: '',
  NombreProcedimientoaux: '',
  materialesaux: '',
  instrumentosaux: '',
  caraaux: '',
  diagnosticoPiezaaux: '',
  diagnosticoTotalaux: '',
};
  ngOnInit() {
    this.odontogramaoficial = this.auth.getCurrentOdontogramaDiente();
    this.patient = this.auth.getCurrentPatient();
    this.app.mostrar = true;
    this.getSeguimientos();
  }
  convert(imagen) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
       + imagen);

}
  getSeguimientos() {
    this.dataApi.getSeguimientoByOdontograma(this.odontogramaoficial.id)
      .subscribe((seguimiento: SeguimientoDienteInterface) => ( this.seguimientodeOdontograma = seguimiento));
    console.log(this.seguimientodeOdontograma);
    }
verdetallespieza(padecimiento: string) {
    if(!padecimiento) {
      alert('Esta pieza no tiene padecimientos. !PIEZA SANA!');
    } else if (padecimiento) {
      this.dataApi.getAllProcedimientosaUNpadecimiento(padecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      console.log(this.procedimientoaPad);
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento1;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
    }
}
onRegisterSeguimiento() {
  this.seguimientoRe.Fecha = this.datepipe.transform(this.fecha, 'dd-MM-yyyy');
  this.auth.registerSeguimiento(
    this.odontogramaoficial.id,
    this.seguimientoRe.Fecha,
    this.seguimientoRe.TratamientoEfectuado,
    this.seguimientoRe.Observaciones,
    this.seguimientoRe.ConsultasPosteriores,
    this.seguimientoRe.Estatus,
  ).subscribe(seguimiento => {
    this.router.navigate(['pacienteseguimiento']);

   } );
}
datos(): void {
  this.router.navigate(['historiaclinica']);
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

}
