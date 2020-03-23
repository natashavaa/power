import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { DataApiService } from '../../services/data-api.service';
import { AuthService } from '../../services/auth.service';
import { PadecimientoInterface } from '../../models/padecimiento.interface';
import { ProcedimientoInterface } from '../../models/procedimiento.interface';
import { ProcedimientoApadecimentoInterface } from '../../models/procedimientoapadecimiento.interface';
import { MaterialInterface } from '../../models/material.interface';
import { InstrumentoInterface } from '../../models/instrumento.interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-procedimientoapadecimiento',
  templateUrl: './procedimientoapadecimiento.component.html',
  styleUrls: ['./procedimientoapadecimiento.component.css']
})
export class ProcedimientoapadecimientoComponent implements OnInit {

  constructor(private router: Router , private dataApi: DataApiService, private authService: AuthService,
              private app: AppComponent) { }

   public padecimiento: PadecimientoInterface = { };
   public procedimiento: ProcedimientoInterface = {
    id: '',
    NombreProcedimiento: '',
    Descripcion: '',
    Estatus: '',
    costo: '',

  };
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
    instrumentos: '' ,

  };
  private materials: MaterialInterface;
  private instrumento: InstrumentoInterface;
  instrumentosArray = new FormControl();
  materialesArray = new FormControl();
  ngOnInit() {
    this.app.mostrar = true;
    this. getlistAllPadecimientos();
    this. getlistAllProcedimientos();
    this.getlistAllMaterial();
    this.getlistAllInstrumentos();
  }
  getlistAllMaterial() {
    this.dataApi.getAllMAterial().subscribe((materials: MaterialInterface) => ( this.materials = materials));
  }
  getlistAllInstrumentos() {
    this.dataApi.getAllIntrumentos().subscribe((Instrumentos: InstrumentoInterface) => ( this.instrumento = Instrumentos));
  }
  getlistAllPadecimientos() {
    this.dataApi.getAllPadecimientos().subscribe((padecimiento: PadecimientoInterface) => ( this.padecimiento = padecimiento));
  }
  getlistAllProcedimientos() {
    this.dataApi.getAllProcedimientos().subscribe((procedimiento: ProcedimientoInterface) => ( this.procedimiento = procedimiento));
  }
  onRegisterProcedimientoApad(): void {
    this.procedimientoaPad.materiales = this.materialesArray.value.map(x => x).join(' , ');
    this.procedimientoaPad.instrumentos = this.instrumentosArray.value.map(x => x).join(', ');
    this.authService.registerProcedimientoaPadecimiento(
      this.procedimientoaPad.NombreProcedimiento,
      this.procedimientoaPad.Descripcion,
      this.procedimientoaPad.Estatus,
      this.procedimientoaPad.costo,
      this.procedimientoaPad.NombrePadecimiento,
      this.procedimientoaPad.NombrePieza,
      this.procedimientoaPad.Imagen,
      this.procedimientoaPad.materiales,
      this.procedimientoaPad.instrumentos,
    ).subscribe(pieza => {
      this.router.navigate(['procedimiento']);
     } );
  }

  cancelar() {
    this.router.navigate(['procedimiento']);
  }

}
