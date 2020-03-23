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
import { MaterialInterface } from '../../models/material.interface';
import { InstrumentoInterface } from '../../models/instrumento.interface';

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
  private material: MaterialInterface;
  private instrumentos: InstrumentoInterface;
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
    this.dataApi.getAllprocedimientopornombre(this.todoslosdientesOficial.ProcedimientoOdontologico)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => {
        this.procedimientoaPadselec = procedimientoaPad;
        this.todoslosdientesOficial.Instrumentos = this.procedimientoaPadselec[0].instrumentos;
        this.todoslosdientesOficial.Materiales = this.procedimientoaPadselec[0].materiales;
      });
  }
  async guardar() {
    this.todoslosdientesOficial.idPatient = this.patient.id;
    const materiales =  this.todoslosdientesOficial.Materiales.split(', ');
    const instrumentos = this.todoslosdientesOficial.Instrumentos.split(', ');
    console.log(instrumentos);
    let j = 0 ;
    for (j = 0; j <= instrumentos.length ; j++ ) {
      this.dataApi.getInstrumentosByName(instrumentos[j]).subscribe((instruments: InstrumentoInterface) => {
        console.log(instruments);
        if ( instruments.cantidad > 0) {
          instruments.cantidad = instruments.cantidad - 1;
          instruments.enUso = instruments.enUso + 1;
          this.auth.updateInstrumento(
            instruments.id,
            instruments.name,
            instruments.cantidad,
            instruments.especiality,
            instruments.costo,
            instruments.idDoctor,
            instruments.enUso,
            instruments.enLimpieza
          ).subscribe(instrumentsw => {
            this.instrumentos = instrumentsw;
            if (instrumentsw.cantidad < 3) {
              // tslint:disable-next-line: max-line-length
              alert('Instrumento: ' + this.instrumentos.name + ' ' + instrumentsw.cantidad + 'Unidades' + ' Proceda a limpiar instrumentos utilizados anteriormente');
            }
           } );
        } else {
          // tslint:disable-next-line: max-line-length
          alert('Cantidad de Instrumentos insuficientes: ' + this.instrumentos.name +  ' Proceda a limpiar instrumentos utilizados anteriormente');
          this.router.navigate(['especialidad']);
        }
      }
      );
    }
     let i = 0;
    for (i = 0 ; i <= materiales.length; i++) {
        console.log(materiales[i]);
        await this.dataApi.getMAterialByName(materiales[i]).subscribe((materials: MaterialInterface) => {
          this.material = materials;
          console.log(this.material);
          if ( materials.cantidad > 0) {
            this.material.cantidad =   this.material.cantidad - 1;
            this.material.usados =  this.material.usados + 1;
            this.auth.updateMaterial(
              this.material.id,
              this.material.name,
              this.material.cantidad,
              this.material.especiality,
              this.material.costo,
              this.material.idDoctor,
              this.material.estadoDisp,
              this.material.usados
            ).subscribe(materialw => {
              if (materialw.cantidad < 3) {
                // tslint:disable-next-line: max-line-length
                alert(' Pocas unidades de material:  ' + ' ' + materialw.name + 'Quedan : ' + materialw.cantidad + '  Unidades Disponuibles' + '  Porfavor Reponer');
               }
             } );
        } else {
            this.material.estadoDisp = 'No Disponible';
            this.auth.updateMaterial(
              this.material.id,
              this.material.name,
              this.material.cantidad,
              this.material.especiality,
              this.material.costo,
              this.material.idDoctor,
              this.material.estadoDisp,
              this.material.usados
            ).subscribe(materialw => {
              alert('Material insuficiente : ' + materialw.name + '  '  + ' Reponer para continuar con el procedimiento');
              this.router.navigate(['materiales']);
             } );
        }
        } );
    }
    this.todoslosdientesOficial.Imagen = '';
    this.auth.registertodoslosdientes(
    this.todoslosdientesOficial.idPatient,
    this.todoslosdientesOficial.Imagen,
    this.todoslosdientesOficial.ProcedimientoOdontologico,
    this.todoslosdientesOficial.Estatus,
    this.todoslosdientesOficial.Instrumentos,
    this.todoslosdientesOficial.Materiales,
    this.todoslosdientesOficial.Diagnostico,
    this.todoslosdientesOficial.Recomendaciones,
    this.todoslosdientesOficial.Observaciones,
    ).subscribe(registro => {
    //  this.router.navigate(['pacienteprocedimiento']);
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
