import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaatientInterface } from '../../models/patients.interface';
import { AppComponent } from '../../app.component';
import { DataApiService } from '../../services/data-api.service';
import { AuthService } from '../../services/auth.service';
import { PresupustoInterface } from 'src/app/models/presupuesto.interace';

@Component({
  selector: 'app-pacientepresupuesto',
  templateUrl: './pacientepresupuesto.component.html',
  styleUrls: ['./pacientepresupuesto.component.css']
})
export class PacientepresupuestoComponent implements OnInit {

  constructor(private router: Router, private dataApi: DataApiService, private authService: AuthService, private app: AppComponent) { }
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
  private patient: PaatientInterface;
  getlistAllPresupuestopatients() {
    this.dataApi.getAllPresupustoPatient(this.patient.id)
    .subscribe((presupeusto: PresupustoInterface) => ( this.presupuestoRe = presupeusto));
  }
  datos(): void {
    this.router.navigate(['historiaclinica']);
  }
  Modificar(pro: PresupustoInterface): void {
    this.authService.setPresupuesto(pro);
    this.router.navigate(['modificarpacientepresupuesto']);
     }
  imagen(): void {
    this.router.navigate(['imagenes']);
  }
  mostrar(debe: string): boolean {
    if (parseInt(debe, 10 ) > 0 ) {
      return true;
    } else {
      return false;
    }
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

  ngOnInit() {
    this.app.mostrar = true;
    this.patient = this.authService.getCurrentPatient();
    this.getlistAllPresupuestopatients();
  }

}
