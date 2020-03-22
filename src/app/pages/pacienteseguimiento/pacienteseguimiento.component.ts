import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PiezaDentalInterface } from '../../models/piezadental.interface';
import { OdontogramaInterface } from '../../models/odontograma.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';
import { AuthService } from '../../services/auth.service';
import { DataApiService } from '../../services/data-api.service';
import { PaatientInterface } from '../../models/patients.interface';

@Component({
  selector: 'app-pacienteseguimiento',
  templateUrl: './pacienteseguimiento.component.html',
  styleUrls: ['./pacienteseguimiento.component.css']
})
export class PacienteseguimientoComponent implements OnInit {

  constructor(private router: Router, private app: AppComponent, private auth: AuthService, private dataApi: DataApiService,
              private _sanitizer: DomSanitizer) { }
  private piezasdental: PiezaDentalInterface = {};
  private odontogramaoficial: OdontogramaInterface = {};
  private patient: PaatientInterface = {};
  llenarodontooficialunavez = true;
  ngOnInit() {
    this.patient = this.auth.getCurrentPatient();
    this.app.mostrar = true;
    this.getAllPiezasdentales();
  }
  getAllPiezasdentales() {
    // tslint:disable-next-line: max-line-length
    this.dataApi.getAllodontogramasbypatient(this.patient.id).subscribe((odontogramarecibidos: OdontogramaInterface) => {
       this.odontogramaoficial = odontogramarecibidos;



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
  IraDetalles(odontogramaoficial: OdontogramaInterface) {
    this.auth.setOdontogramaDiente(odontogramaoficial);
    this.router.navigate(['pacienteseguimientodetalle']);
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

}
