import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PiezaDentalInterface } from '../../models/piezadental.interface';
import { OdontogramaInterface } from '../../models/odontograma.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';
import { AuthService } from '../../services/auth.service';
import { DataApiService } from '../../services/data-api.service';
import { PaatientInterface } from '../../models/patients.interface';
import { TodoslosdientesInterface } from '../../models/todoslosdientes.interface';
import { SeguimientoTodoslosdientesComponent } from '../seguimiento-todoslosdientes/seguimiento-todoslosdientes.component';
import { SeguimientoTodoslosDientesInterface } from '../../models/todoslosdientesdetalles.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todoslosdientesdetalle',
  templateUrl: './todoslosdientesdetalle.component.html',
  styleUrls: ['./todoslosdientesdetalle.component.css']
})
export class TodoslosdientesdetalleComponent implements OnInit {

  constructor(private router: Router, private app: AppComponent, private auth: AuthService, private dataApi: DataApiService,
              private _sanitizer: DomSanitizer, public datepipe: DatePipe) { }
  private piezasdental: PiezaDentalInterface = {};
  private seguimientorecibido: TodoslosdientesInterface = {};
  private seguimientoRe: SeguimientoTodoslosDientesInterface = {};
  private patient: PaatientInterface = {};
  private seguimientodeOdontograma: TodoslosdientesInterface = {};
  llenarodontooficialunavez = true;
  momentoC: string;
  fecha = Date;
  ngOnInit() {
    this.patient = this.auth.getCurrentPatient();
    this.app.mostrar = true;
    this.seguimientorecibido = this.auth.getTodoslosDientes();
    this.getSeguimientos();
  }
  getSeguimientos() {
    this.dataApi.getSeguimientoByOdontogramatodoslosdientes(this.seguimientorecibido.id)
      .subscribe((seguimiento: TodoslosdientesInterface) => ( this.seguimientodeOdontograma = seguimiento));

    }
    cancelar() {
      this.router.navigate(['seguimientotodoslosdientes']);
    }
  onRegisterSeguimiento() {
    this.seguimientorecibido.Estatus = this.seguimientoRe.Estatus;
    this.auth.Updatetodoslosdientes(
      this.seguimientorecibido.id,
      this.seguimientorecibido.idPatient,
      this.seguimientorecibido.Imagen,
      this.seguimientorecibido.ProcedimientoOdontologico,
      this.seguimientorecibido.Estatus,
      this.seguimientorecibido.Instrumentos,
      this.seguimientorecibido.Materiales,
      this.seguimientorecibido.Diagnostico,
      this.seguimientorecibido.Recomendaciones,
      this.seguimientorecibido.Observaciones,
      ).subscribe(registro => {
       } );
    this.seguimientoRe.Fecha = this.datepipe.transform(this.fecha, 'dd-MM-yyyy');
    console.log(this.seguimientoRe);
    this.seguimientoRe.idOdontograma = this.seguimientorecibido.id;
    this.auth.registerSeguimientotodoslosdientes(
      this.seguimientorecibido.id,
      this.seguimientoRe.Fecha,
      this.seguimientoRe.TratamientoEfectuado,
      this.seguimientoRe.Observaciones,
      this.seguimientoRe.ConsultasPosteriores,
      this.seguimientoRe.Estatus,
    ).subscribe(seguimiento => {
      this.router.navigate(['seguimientotodoslosdientes']);

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

  verservicios(): void {
    this.router.navigate(['verservicios']);
  }
}
