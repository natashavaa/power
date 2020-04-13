import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ServicioInterface } from '../../models/servicios.interface';
import { AppComponent } from '../../app.component';
import { DataApiService } from '../../services/data-api.service';
import { PaatientInterface } from '../../models/patients.interface';
import { PresupustoInterface } from 'src/app/models/presupuesto.interace';
import { FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-odontogramaservicios',
  templateUrl: './odontogramaservicios.component.html',
  styleUrls: ['./odontogramaservicios.component.css']
})
export class OdontogramaserviciosComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router,
              private dataApi: DataApiService, private app: AppComponent,
              public datepipe: DatePipe) { }
  private patient: PaatientInterface;
  Estimado = 0;

  fechadeHoy: Date;
  materialesArray = new FormControl();
  private servicios: ServicioInterface = {

    NombredelServicio: '',
    Descripcion: '',
    Costo: '',
  };
  private presupuestoRe: PresupustoInterface = {

    idPatient: '',
    PresupuestoBsf: '',
    PresupuestoDolares: '',
    Abono: '',
    Debe: '',
    Estatus: '',
    Estimado: '',
    serviciosTratados: '',
    FechadeCreacion: '',
    FechasdePagos: '',
  };
  onRegister(): void {
    const now = new Date();
    this.presupuestoRe.Estimado =  this.Estimado.toString();
    this.presupuestoRe.idPatient = this.patient.id;
    this.presupuestoRe.PresupuestoDolares = this.Estimado.toString();
    this.presupuestoRe.Abono = '0';
    this.presupuestoRe.Estatus = 'Deuda';
    this.presupuestoRe.Debe = this.Estimado.toString();
    this.presupuestoRe.FechadeCreacion = this.datepipe.transform(now, 'dd-MM-yyyy');

 //   const fechaInicio = this.datepipe.transform(this.startDate, 'yyyy-MM-dd h:mm:ss.ssssss');
 //   const fechaFinal = this.datepipe.transform(this.endDate, 'yyyy-MM-dd h:mm:ss.ssssss');
    console.log(this.presupuestoRe);
    this.auth.registerPresupuesto(
      this.presupuestoRe.idPatient,
      this.presupuestoRe.PresupuestoBsf,
      this.presupuestoRe.PresupuestoDolares,
      this.presupuestoRe.Abono,
      this.presupuestoRe.Debe,
      this.presupuestoRe.Estatus,
      this.presupuestoRe.Estimado,
      this.presupuestoRe.serviciosTratados,
      this.presupuestoRe.FechadeCreacion,
      this.presupuestoRe.FechasdePagos,
    ).subscribe(pieza => {

      this.router.navigate(['pacientepresupuesto']);
     } );
    }
  ngOnInit() {
    this.patient = this.auth.getCurrentPatient();
    this.app.mostrar = true;
    this.getlistAllServicios();
  }
  getlistAllServicios() {
    this.dataApi.getAllServicios().subscribe((servicios: ServicioInterface) => {
       this.servicios = servicios;
    } );
  }
  onCheckboxChange(e, servicio: ServicioInterface) {
    if (e.target.checked === true) {
      this.presupuestoRe.serviciosTratados = this.presupuestoRe.serviciosTratados  + servicio.NombredelServicio + ' , ';
      this.Estimado = this.Estimado + parseInt(servicio.Costo, 10);
    } else if (e.target.checked === false) {
      this.Estimado = this.Estimado - parseInt(servicio.Costo, 10);
    }

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

  odontograma(): void { // toamr de aqio
    this.router.navigate(['pacienteodontograma']);
  }

  informacion(): void {
    this.router.navigate(['pacienteinformacion']);
  }

  historia(): void {
    this.router.navigate(['pacienteprocedimiento']);
  }

  cancelar(): void {
    this.router.navigate(['pacienteprocedimiento']);
  }
  recipe(): void {
    this.router.navigate(['pacienterecipe']);
  }

  presupuesto(): void {
    this.router.navigate(['pacientepresupuesto']);
  }

  verservicios(): void {
    this.router.navigate(['verservicios']);
  }



  informe(): void {
    this.router.navigate(['pacienteinforme']);
  }
}
