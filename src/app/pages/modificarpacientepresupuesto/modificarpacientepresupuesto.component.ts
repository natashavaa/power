import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupustoInterface } from '../../models/presupuesto.interace';
import { DataApiService } from '../../services/data-api.service';
import { AppComponent } from '../../app.component';
import { AuthService } from 'src/app/services/auth.service';
import { PaatientInterface } from '../../models/patients.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-modificarpacientepresupuesto',
  templateUrl: './modificarpacientepresupuesto.component.html',
  styleUrls: ['./modificarpacientepresupuesto.component.css']
})
export class ModificarpacientepresupuestoComponent implements OnInit {

  debe = 0;
  constructor(public datepipe: DatePipe, private router: Router,
              private dataApi: DataApiService, private authService: AuthService,
              private app: AppComponent) { }
  private presupuestoRe: PresupustoInterface = {

    idPatient: '',
    PresupuestoBsf: '',
    PresupuestoDolares: '',
    Abono: '',
    Debe: '',
    Estatus: '',
    Estimado: '',
    serviciosTratados: '',
  };
  private patient: PaatientInterface;

  datos(): void {
    this.router.navigate(['historiaclinica']);
  }
  onRegisterPresupuesto(): void {
    const now = new Date();
  //  this.presupuestoRe.Estimado =  this.Estimado.toString();
    this.presupuestoRe.idPatient = this.patient.id;
    //this.presupuestoRe.PresupuestoDolares = this.Estimado.toString();
   // this.presupuestoRe.Abono = '0';
   // this.presupuestoRe.Estatus = 'Deuda';
    this.presupuestoRe.FechasdePagos = this.presupuestoRe.FechasdePagos + '  ' + this.datepipe.transform(now, 'dd-MM-yyyy');

    this.presupuestoRe.Debe = this.debe.toString();
    this.authService.updatePresupuesto(
      this.presupuestoRe.id,
      this.presupuestoRe.idPatient,
      this.presupuestoRe.PresupuestoBsf,
      this.presupuestoRe.PresupuestoDolares,
      this.presupuestoRe.Abono,
      this.presupuestoRe.Debe,
      this.presupuestoRe.Estatus,
      this.presupuestoRe.Estimado,
      this.presupuestoRe.serviciosTratados,
      this.presupuestoRe.FechadeCreacion,
      this.presupuestoRe.FechasdePagos
    ).subscribe(pieza => {
      this.router.navigate(['pacientepresupuesto']);
     } );
    }
  imagen(): void {
    this.router.navigate(['imagenes']);
  }

  consulta(): void {
    this.router.navigate(['pacienteconsulta']);
  }
  onCheckboxChange(e, servicio: PresupustoInterface) {
    if (e.target.value > this.presupuestoRe.Debe) {
      alert('Sobre Pasa el limite de la deuda');
    } else {
      this.debe = parseInt(this.presupuestoRe.Debe, 10)  - parseInt(this.presupuestoRe.Abono, 10);
      this.presupuestoRe.Debe = this.debe.toString();
    }

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
    this.presupuestoRe = this.authService.getCurrentPresupuesto();

  }
  cancelar() {
    this.router.navigate(['pacientepresupuesto']);
    }
}
