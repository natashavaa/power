import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { OrtodonciaInterface } from '../../models/ortodoncia.interface';
import { FormControl } from '@angular/forms';
import { DataApiService } from '../../services/data-api.service';
import { AuthService } from '../../services/auth.service';
import { PaatientInterface } from '../../models/patients.interface';
import { OdontogramaInterface } from '../../models/odontograma.interface';
import { SeguimientoOrtodonciaInterface } from '../../models/ortodonciaseguimiento.interface';
import { DatePipe } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-ortodoncialistadetalle',
  templateUrl: './ortodoncialistadetalle.component.html',
  styleUrls: ['./ortodoncialistadetalle.component.css']
})
export class OrtodoncialistadetalleComponent implements OnInit{

  constructor(private router: Router, private app: AppComponent, private auth: AuthService, private dataApi: DataApiService,
              public datepipe: DatePipe) { }
  fecha = Date;
  // tslint:disable-next-line: max-line-length
  toppingList: string[] = ['Diastema', 'Vestibulizacion de los incisivos superiores', 'Apiñamiento Leve', 'Apiñamiento Moderado', 'Apiñamiento Severo', 'Mordida Profunda', 'Mordida abierta anterior', 'Biprotrusión'];
  private Ortodonciarecibido: OrtodonciaInterface = {};
  private SeguimientoOrtodoncia: SeguimientoOrtodonciaInterface = {};
  private listSeguimientoOrtodoncia: SeguimientoOrtodonciaInterface = {};
  private patient: PaatientInterface = {};
  mostrarD = false;
  mostrarDV = false;
  mostrarC = false;
  mostrarD2 = false;
  mostrarDV2 = false;
  mostrarC2 = false;
  clase1Molar2 = false;
  clase2Molar2 = false;
  clase3Molar2 = false;
 // private material: MaterialInterface;
 // private instrumentos: InstrumentoInterface;
  ngOnInit() {
    this.app.mostrar = true;
    this.patient = this.auth.getCurrentPatient();
    this.Ortodonciarecibido = this.auth.getortodoncia();
    console.log(this.Ortodonciarecibido);
    this.cuales();
    this.getAllPiezasdentales();
  }
  getAllPiezasdentales() {
    // tslint:disable-next-line: max-line-length
    this.dataApi.getAllodontogramastodoslosdientesbypatient(this.Ortodonciarecibido.id).subscribe((seguimientosrecibidos: SeguimientoOrtodonciaInterface) => {
      this.listSeguimientoOrtodoncia = seguimientosrecibidos;
      } );
  }
  cuales() {
    if (this.Ortodonciarecibido.DivisionesMolar1 !== null) {
      this.mostrarD = true;
      this.mostrarDV = false;
      this.mostrarC = false;
    } else if (this.Ortodonciarecibido.DivisionesMolarV1 !== null) {
      this.mostrarD = false;
      this.mostrarDV = true;
      this.mostrarC = false;
    } else if (this.Ortodonciarecibido.CategoriasMolar1 !== null) {
      this.mostrarD = false;
      this.mostrarDV = false;
      this.mostrarC = true;
    }

    if (this.Ortodonciarecibido.DivisionesMolar2 !== null) {
      this.mostrarD2 = true;
      this.mostrarDV2 = false;
      this.mostrarC2 = false;
    } else if (this.Ortodonciarecibido.DivisionesMolarV2 !== null) {
      this.mostrarD2 = false;
      this.mostrarDV2 = true;
      this.mostrarC2 = false;
    } else if (this.Ortodonciarecibido.CategoriasMolar2 !== null) {
      this.mostrarD2 = false;
      this.mostrarDV2 = false;
      this.mostrarC2 = true;
    }
  }
  guardar() {
    this.SeguimientoOrtodoncia.Fecha = this.datepipe.transform(this.fecha, 'dd-MM-yyyy');
    this.SeguimientoOrtodoncia.idOrtodoncia = this.Ortodonciarecibido.id;
    this.auth.registerSeguimientoOrtodoncia(
      this.SeguimientoOrtodoncia.idOrtodoncia,
      this.SeguimientoOrtodoncia.ComentariodegOGNPMAX,
      this.SeguimientoOrtodoncia.ComentariodesUPINF,
      this.SeguimientoOrtodoncia.ComentariodeaNB,
      this.SeguimientoOrtodoncia.ComentariodesNB,
      this.SeguimientoOrtodoncia.ComentariodesNA,
      this.SeguimientoOrtodoncia.ComentariodesNGN,
      this.SeguimientoOrtodoncia.ComentariodenAPOG,
      this.SeguimientoOrtodoncia.ComentariodesNGOGN,
      this.SeguimientoOrtodoncia.ComentariodesNPLO,
      this.SeguimientoOrtodoncia.ComentariodesNFH,
      this.SeguimientoOrtodoncia.Fecha,
      this.SeguimientoOrtodoncia.TratamientoEfectuado,
      this.SeguimientoOrtodoncia.Observaciones,
      this.SeguimientoOrtodoncia.ConsultasPosteriores,
      this.SeguimientoOrtodoncia.Estatus,
    ).subscribe(seguimiento => {
      this.router.navigate(['listaOrtodoncia']);

     } );
    console.log(this.SeguimientoOrtodoncia);
  }
  iradetalles(ortodoncia: OrtodonciaInterface) {
    this.auth.setodortodoncia(ortodoncia);
    this.router.navigate(['listaOrtodonciadetalle']);
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

  padecimiento(): void {
    this.router.navigate(['pacientepadecimiento']);
  }

  informacion(): void {
    this.router.navigate(['pacienteinformacion']);
  }

  todos(): void {
    this.router.navigate(['todoslosdientes']);
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


