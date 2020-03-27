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

@Component({
  selector: 'app-seguimiento-todoslosdientes',
  templateUrl: './seguimiento-todoslosdientes.component.html',
  styleUrls: ['./seguimiento-todoslosdientes.component.css']
})
export class SeguimientoTodoslosdientesComponent implements OnInit {

  constructor(private router: Router, private app: AppComponent, private auth: AuthService, private dataApi: DataApiService,
              private _sanitizer: DomSanitizer) { }
  private piezasdental: PiezaDentalInterface = {};
  private seguimientosrecibidos: TodoslosdientesInterface = {};
  private patient: PaatientInterface = {};
  llenarodontooficialunavez = true;
  momentoC: string;
  ngOnInit() {
    this.patient = this.auth.getCurrentPatient();
    this.app.mostrar = true;
    this.getAllPiezasdentales();
  }
  getType(): void {
    if ( Object.is(this.momentoC, 'Diente por Diente')) {
      this.router.navigate(['pacienteseguimiento']);
    } else if ( Object.is(this.momentoC, 'Todos los Dientes')) {
      this.router.navigate(['seguimientotodoslosdientes']);
    } else if (Object.is(this.momentoC, 'Ortodoncia')) {
      this.router.navigate(['listaOrtodoncia']);
    }
  }
  getAllPiezasdentales() {
    // tslint:disable-next-line: max-line-length
    this.dataApi.getAllodontogramastodoslosdientesbypatient(this.patient.id).subscribe((seguimientosrecibidos: TodoslosdientesInterface) => {
       this.seguimientosrecibidos = seguimientosrecibidos;
       if (this.llenarodontooficialunavez) {

        this.llenarodontooficialunavez = false;
      }
       this.llenarodontooficialunavez = false;
      } );
  }
  convert(imagen) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
       + imagen);
  }
  IraDetalles(seguimientosrecibidos: TodoslosdientesInterface) {
    this.auth.setTodoslosDientes(seguimientosrecibidos);
    this.router.navigate(['seguimientotodoslosdientesdetalle']);
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
