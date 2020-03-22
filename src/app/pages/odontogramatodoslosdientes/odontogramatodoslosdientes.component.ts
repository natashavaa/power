import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { DomSanitizer } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { DataApiService } from '../../services/data-api.service';
import { ProcedimientoApadecimentoInterface } from '../../models/procedimientoapadecimiento.interface';
import { TodoslosdientesInterface } from '../../models/todoslosdientes.interface';
import { PaatientInterface } from '../../models/patients.interface';

@Component({
  selector: 'app-odontogramatodoslosdientes',
  templateUrl: './odontogramatodoslosdientes.component.html',
  styleUrls: ['./odontogramatodoslosdientes.component.css']
})
export class OdontogramatodoslosdientesComponent implements OnInit {

  momentoC: string;
  constructor(private router: Router, private app: AppComponent, private auth: AuthService, private dataApi: DataApiService,
              private _sanitizer: DomSanitizer,  public datepipe: DatePipe) { }


  private patient: PaatientInterface = {};
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
public procedimientoaPadselec: ProcedimientoApadecimentoInterface = {
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
private todoslosdientesOficial: TodoslosdientesInterface = {};
  ngOnInit() {
    this.patient = this.auth.getCurrentPatient();
    this.app.mostrar = true;
    this.dataApi.getAllProcedimientosTodoslosdientes()
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => {
        this.procedimientoaPad = procedimientoaPad;
        console.log(this.procedimientoaPad);
      });
  }
  getType(): void {
    if ( Object.is(this.momentoC, 'Diente por Diente')) {
      this.router.navigate(['pacienteodontograma']);
    } else if ( Object.is(this.momentoC, 'Todos los Dientes')) {
      this.router.navigate(['todoslosdientes']);
    } else if (Object.is(this.momentoC, 'Ortodoncia')) {
      this.router.navigate(['ortodoncia']);
    }
  }
  buscarProcedimiento(nombre: string) {
    console.log(this.todoslosdientesOficial.ProcedimientoOdontologico);
    this.dataApi.getAllprocedimientopornombre(this.todoslosdientesOficial.ProcedimientoOdontologico)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => {
        this.procedimientoaPadselec = procedimientoaPad;
        console.log(this.procedimientoaPadselec);
        this.todoslosdientesOficial.Instrumentos = this.procedimientoaPadselec[0].instrumentos;
        this.todoslosdientesOficial.Materiales = this.procedimientoaPadselec[0].materiales;
      });
  }
  guardar() {
    this.todoslosdientesOficial.idPatient = this.patient.id;
    this.auth.registertodoslosdientes(
    this.todoslosdientesOficial.idPatient,
    this.todoslosdientesOficial.ProcedimientoOdontologico,
    this.todoslosdientesOficial.Estatus,
    this.todoslosdientesOficial.Instrumentos,
    this.todoslosdientesOficial.Materiales,
    this.todoslosdientesOficial.Diagnostico,
    this.todoslosdientesOficial.Recomendaciones,
    this.todoslosdientesOficial.Observaciones,
    ).subscribe(registro => {
      this.router.navigate(['pacienteprocedimiento']);
     } );
    console.log(this.todoslosdientesOficial);
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
