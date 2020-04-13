import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { AuthService } from '../../services/auth.service';
import { DataApiService } from '../../services/data-api.service';
import { PiezaDentalInterface } from '../../models/piezadental.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { PadecimientoporDienteInterface } from '../../models/piezaconPadecimiento.interface';
import { OdontogramaInterface } from '../../models/odontograma.interface';
import { FormularioInterface } from '../../models/formulario.interface';
import { ProcedimientoApadecimentoInterface } from '../../models/procedimientoapadecimiento.interface';
import { PaatientInterface } from '../../models/patients.interface';
import { MaterialInterface } from '../../models/material.interface';
import { InstrumentoInterface } from '../../models/instrumento.interface';

@Component({
  selector: 'app-pacienteodontograma',
  templateUrl: './pacienteodontograma.component.html',
  styleUrls: ['./pacienteodontograma.component.css']
})
export class PacienteodontogramaComponent implements OnInit {

  constructor(private router: Router, private app: AppComponent, private auth: AuthService, private dataApi: DataApiService,
              private _sanitizer: DomSanitizer) { }
  momentoC: string;

  pieza1 = false;
  pieza2 = false;
  pieza3 = false;
  pieza4 = false;
  pieza5 = false;
  pieza6 = false;
  pieza7 = false;
  pieza8 = false;
  pieza9 = false;
  pieza10 = false;
  pieza11 = false;
  pieza12 = false;
  pieza13 = false;
  pieza14 = false;
  pieza15 = false;
  pieza16 = false;
  pieza17 = false;
  pieza18 = false;
  pieza19 = false;
  pieza20 = false;
  pieza21 = false;
  pieza22 = false;
  pieza23 = false;
  pieza24 = false;
  pieza25 = false;
  pieza26 = false;
  pieza27 = false;
  pieza28 = false;
  pieza29 = false;
  pieza30 = false;
  pieza31 = false;
  pieza32 = false;
  public formulario: FormularioInterface = {
    piezaux: '',
    padecimientoaux: '',
    posicionaux: '',
    NombreProcedimientoaux: '',
    materialesaux: '',
    instrumentosaux: '',
    caraaux: '',
    diagnosticoPiezaaux: '',
    diagnosticoTotalaux: '',
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
    instrumentos: '',

  };
  private piezasdental: PiezaDentalInterface = {};
  private odontogramaoficial: OdontogramaInterface = {};
  private odontogramaguardado: OdontogramaInterface = {};
  private piezasdentalconpadecimientos: PadecimientoporDienteInterface = {};
  private patient: PaatientInterface = {};
  private material: MaterialInterface;
  private instrumentos: InstrumentoInterface;
  MostrarPadecimientos = false;
  Mostrarformulario = false;
  llenarodontooficialunavez = true;
  ngOnInit() {
    this.patient = this.auth.getCurrentPatient();
    this.app.mostrar = true;
    this.getAllPiezasdentales();
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
  convert(imagen) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
       + imagen);
  }
  getAllPiezasdentales() {
    // tslint:disable-next-line: max-line-length
    this.dataApi.getAllPiezasDentales().subscribe((piezasdentales: PiezaDentalInterface) => {
       this.piezasdental = piezasdentales;
       if (this.llenarodontooficialunavez) {
        this.odontogramaoficial.Imagen1 = this.piezasdental[0].Imagen;
        this.odontogramaoficial.Nomenclatura1 = this.piezasdental[0].Nomenclatura;
        this.odontogramaoficial.Imagen2 = this.piezasdental[1].Imagen;
        this.odontogramaoficial.Nomenclatura2 = this.piezasdental[1].Nomenclatura;
        this.odontogramaoficial.Imagen3 = this.piezasdental[2].Imagen;
        this.odontogramaoficial.Nomenclatura3 = this.piezasdental[2].Nomenclatura;
        this.odontogramaoficial.Imagen4 = this.piezasdental[3].Imagen;
        this.odontogramaoficial.Nomenclatura4 = this.piezasdental[3].Nomenclatura;
        this.odontogramaoficial.Imagen5 = this.piezasdental[4].Imagen;
        this.odontogramaoficial.Nomenclatura5 = this.piezasdental[4].Nomenclatura;
        this.odontogramaoficial.Imagen6 = this.piezasdental[5].Imagen;
        this.odontogramaoficial.Nomenclatura6 = this.piezasdental[5].Nomenclatura;
        this.odontogramaoficial.Imagen7 = this.piezasdental[6].Imagen;
        this.odontogramaoficial.Nomenclatura7 = this.piezasdental[6].Nomenclatura;
        this.odontogramaoficial.Imagen8 = this.piezasdental[7].Imagen;
        this.odontogramaoficial.Nomenclatura8 = this.piezasdental[7].Nomenclatura;
        this.odontogramaoficial.Imagen9 = this.piezasdental[8].Imagen;
        this.odontogramaoficial.Nomenclatura9 = this.piezasdental[8].Nomenclatura;
        this.odontogramaoficial.Imagen10 = this.piezasdental[9].Imagen;
        this.odontogramaoficial.Nomenclatura10 = this.piezasdental[9].Nomenclatura;
        this.odontogramaoficial.Imagen11 = this.piezasdental[10].Imagen;
        this.odontogramaoficial.Nomenclatura11 = this.piezasdental[10].Nomenclatura;
        this.odontogramaoficial.Imagen12 = this.piezasdental[11].Imagen;
        this.odontogramaoficial.Nomenclatura12 = this.piezasdental[11].Nomenclatura;
        this.odontogramaoficial.Imagen13 = this.piezasdental[12].Imagen;
        this.odontogramaoficial.Nomenclatura13 = this.piezasdental[12].Nomenclatura;
        this.odontogramaoficial.Imagen14 = this.piezasdental[13].Imagen;
        this.odontogramaoficial.Nomenclatura14 = this.piezasdental[13].Nomenclatura;
        this.odontogramaoficial.Imagen15 = this.piezasdental[14].Imagen;
        this.odontogramaoficial.Nomenclatura15 = this.piezasdental[14].Nomenclatura;
        this.odontogramaoficial.Imagen16 = this.piezasdental[15].Imagen;
        this.odontogramaoficial.Nomenclatura16 = this.piezasdental[15].Nomenclatura;
        this.odontogramaoficial.Imagen17 = this.piezasdental[16].Imagen;
        this.odontogramaoficial.Nomenclatura17 = this.piezasdental[16].Nomenclatura;
        this.odontogramaoficial.Imagen18 = this.piezasdental[17].Imagen;
        this.odontogramaoficial.Nomenclatura18 = this.piezasdental[17].Nomenclatura;
        this.odontogramaoficial.Imagen19 = this.piezasdental[18].Imagen;
        this.odontogramaoficial.Nomenclatura19 = this.piezasdental[18].Nomenclatura;
        this.odontogramaoficial.Imagen20 = this.piezasdental[19].Imagen;
        this.odontogramaoficial.Nomenclatura20 = this.piezasdental[19].Nomenclatura;
        this.odontogramaoficial.Imagen21 = this.piezasdental[20].Imagen;
        this.odontogramaoficial.Nomenclatura21 = this.piezasdental[20].Nomenclatura;
        this.odontogramaoficial.Imagen22 = this.piezasdental[21].Imagen;
        this.odontogramaoficial.Nomenclatura22 = this.piezasdental[21].Nomenclatura;
        this.odontogramaoficial.Imagen23 = this.piezasdental[22].Imagen;
        this.odontogramaoficial.Nomenclatura23 = this.piezasdental[22].Nomenclatura;
        this.odontogramaoficial.Imagen24 = this.piezasdental[23].Imagen;
        this.odontogramaoficial.Nomenclatura24 = this.piezasdental[23].Nomenclatura;
        this.odontogramaoficial.Imagen25 = this.piezasdental[24].Imagen;
        this.odontogramaoficial.Nomenclatura25 = this.piezasdental[24].Nomenclatura;
        this.odontogramaoficial.Imagen26 = this.piezasdental[25].Imagen;
        this.odontogramaoficial.Nomenclatura26 = this.piezasdental[25].Nomenclatura;
        this.odontogramaoficial.Imagen27 = this.piezasdental[26].Imagen;
        this.odontogramaoficial.Nomenclatura27 = this.piezasdental[26].Nomenclatura;
        this.odontogramaoficial.Imagen28 = this.piezasdental[27].Imagen;
        this.odontogramaoficial.Nomenclatura28 = this.piezasdental[27].Nomenclatura;
        this.odontogramaoficial.Imagen29 = this.piezasdental[28].Imagen;
        this.odontogramaoficial.Nomenclatura29 = this.piezasdental[28].Nomenclatura;
        this.odontogramaoficial.Imagen30 = this.piezasdental[29].Imagen;
        this.odontogramaoficial.Nomenclatura30 = this.piezasdental[29].Nomenclatura;
        this.odontogramaoficial.Imagen31 = this.piezasdental[30].Imagen;
        this.odontogramaoficial.Nomenclatura31 = this.piezasdental[30].Nomenclatura;
        this.odontogramaoficial.Imagen32 = this.piezasdental[31].Imagen;
        this.odontogramaoficial.Nomenclatura32 = this.piezasdental[31].Nomenclatura;


        this.odontogramaoficial.NombrePieza1 = this.piezasdental[0].NombrePieza;
        this.odontogramaoficial.NombrePieza2 = this.piezasdental[1].NombrePieza;
        this.odontogramaoficial.NombrePieza3 = this.piezasdental[2].NombrePieza;
        this.odontogramaoficial.NombrePieza4 = this.piezasdental[3].NombrePieza;
        this.odontogramaoficial.NombrePieza5 = this.piezasdental[4].NombrePieza;
        this.odontogramaoficial.NombrePieza6 = this.piezasdental[5].NombrePieza;
        this.odontogramaoficial.NombrePieza7 = this.piezasdental[6].NombrePieza;
        this.odontogramaoficial.NombrePieza8 = this.piezasdental[7].NombrePieza;
        this.odontogramaoficial.NombrePieza9 = this.piezasdental[8].NombrePieza;
        this.odontogramaoficial.NombrePieza10 = this.piezasdental[9].NombrePieza;
        this.odontogramaoficial.NombrePieza11 = this.piezasdental[10].NombrePieza;
        this.odontogramaoficial.NombrePieza12 = this.piezasdental[11].NombrePieza;
        this.odontogramaoficial.NombrePieza13 = this.piezasdental[12].NombrePieza;
        this.odontogramaoficial.NombrePieza14 = this.piezasdental[13].NombrePieza;
        this.odontogramaoficial.NombrePieza15 = this.piezasdental[14].NombrePieza;
        this.odontogramaoficial.NombrePieza16 = this.piezasdental[15].NombrePieza;
        this.odontogramaoficial.NombrePieza17 = this.piezasdental[16].NombrePieza;
        this.odontogramaoficial.NombrePieza18 = this.piezasdental[17].NombrePieza;
        this.odontogramaoficial.NombrePieza19 = this.piezasdental[18].NombrePieza;
        this.odontogramaoficial.NombrePieza20 = this.piezasdental[19].NombrePieza;
        this.odontogramaoficial.NombrePieza21 = this.piezasdental[20].NombrePieza;
        this.odontogramaoficial.NombrePieza22 = this.piezasdental[21].NombrePieza;
        this.odontogramaoficial.NombrePieza23 = this.piezasdental[22].NombrePieza;
        this.odontogramaoficial.NombrePieza24 = this.piezasdental[23].NombrePieza;
        this.odontogramaoficial.NombrePieza25 = this.piezasdental[24].NombrePieza;
        this.odontogramaoficial.NombrePieza26 = this.piezasdental[25].NombrePieza;
        this.odontogramaoficial.NombrePieza27 = this.piezasdental[26].NombrePieza;
        this.odontogramaoficial.NombrePieza28 = this.piezasdental[27].NombrePieza;
        this.odontogramaoficial.NombrePieza29 = this.piezasdental[28].NombrePieza;
        this.odontogramaoficial.NombrePieza30 = this.piezasdental[29].NombrePieza;
        this.odontogramaoficial.NombrePieza31 = this.piezasdental[30].NombrePieza;
        this.odontogramaoficial.NombrePieza32 = this.piezasdental[31].NombrePieza;

        this.llenarodontooficialunavez = false;
      }
       this.llenarodontooficialunavez = false;
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
  }

  seguimiento(): void {
    this.router.navigate(['pacienteseguimiento']);
  }

  odontograma(): void {
    this.router.navigate(['pacienteodontograma']);
  }

  padecimiento(piezasdental: PiezaDentalInterface, pieza: string): void {

    // tslint:disable-next-line: max-line-length
    this.dataApi.getAllPadecimientosxpiezaporNomeclatura(piezasdental.Nomenclatura).subscribe((piezasdentalconpadecimientos: PadecimientoporDienteInterface) => { this.piezasdentalconpadecimientos = piezasdentalconpadecimientos; } );

    this.MostrarPadecimientos = true;
    this.Mostrarformulario = false;
    if (Object.is(pieza, 'pieza1')) {
      this.pieza1 = true;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;

    } else  if (Object.is(pieza, 'pieza2')) {
      this.pieza2 = true;
      this.pieza1 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza3')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = true;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza4')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = true;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza5')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = true;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza6')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = true;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza7')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = true;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza8')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = true;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza9')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = true;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza10')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = true;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza11')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = true;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza12')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = true;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza13')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = true;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza14')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = true;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza15')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = true;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza16')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = true;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza17')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = true;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza18')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = true;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza19')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = true;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza20')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = true;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza21')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = true;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza22')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = true;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza23')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = true;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza24')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = true;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza25')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = true;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza26')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = true;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza27')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = true;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza28')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = true;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza29')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = true;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza30')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = true;
      this.pieza31 = false;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza31')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = true;
      this.pieza32 = false;
    } else if (Object.is(pieza, 'pieza32')) {
      this.pieza1 = false;
      this.pieza2 = false;
      this.pieza3 = false;
      this.pieza4 = false;
      this.pieza5 = false;
      this.pieza6 = false;
      this.pieza7 = false;
      this.pieza8 = false;
      this.pieza9 = false;
      this.pieza10 = false;
      this.pieza11 = false;
      this.pieza12 = false;
      this.pieza13 = false;
      this.pieza14 = false;
      this.pieza15 = false;
      this.pieza16 = false;
      this.pieza17 = false;
      this.pieza18 = false;
      this.pieza19 = false;
      this.pieza20 = false;
      this.pieza21 = false;
      this.pieza22 = false;
      this.pieza23 = false;
      this.pieza24 = false;
      this.pieza25 = false;
      this.pieza26 = false;
      this.pieza27 = false;
      this.pieza28 = false;
      this.pieza29 = false;
      this.pieza30 = false;
      this.pieza31 = false;
      this.pieza32 = true;
    }

    this.ngOnInit();
  }
  vaciarInventario(materialesrec: string, instrumentosrec: string) {
    if (materialesrec.length < 2) {
      alert('A ocurrido algo inesperado porfavor seleccione de nuevo el padecimiento');
    }
    const materiales =  materialesrec.split(' , ');
    const instrumentos = instrumentosrec.split(' , ');

    let j = 0 ;
    for (j = 0; j <= instrumentos.length ; j++ ) {
      this.dataApi.getInstrumentosByName(instrumentos[j]).subscribe((instruments: InstrumentoInterface) => {

        this.instrumentos = instruments;
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
            if (instrumentsw.cantidad < 3) {
           //    tslint:disable-next-line: max-line-length
              alert('Instrumento: ' + instrumentsw.name + ' ' + instrumentsw.cantidad + 'Unidades' + ' Proceda a limpiar instrumentos utilizados anteriormente');
            }
           } );
        } else if (instruments.cantidad === 0) {
          // tslint:disable-next-line: max-line-length
          alert('Cantidad de Instrumentos insuficientes ' +  ' Proceda a limpiar instrumentos utilizados anteriormente');
          this.router.navigate(['especialidad']);
        }
      }
      );
    }
    let i = 0;
    for (i = 0 ; i <= materiales.length; i++) {

        this.dataApi.getMAterialByName(materiales[i]).subscribe((materials: MaterialInterface) => {
          this.material = materials;
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
                alert(' Pocas unidades de material:  ' + ' ' + materialw.name + '  Quedan : ' + materialw.cantidad + '  Unidades Disponibles' + '  Porfavor Reponer');
               }
             } );
        } else if (materials.cantidad === 0)  {
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
  }
  llenarFormulario(piezasdentalconpadecimiento: PadecimientoporDienteInterface): void {
    if (this.pieza1 === true ) {
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.Imagen1 = piezasdentalconpadecimiento.Imagen;
      this.odontogramaoficial.NombrePieza1 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento1 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion1 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales1 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos1 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento1 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara1 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza1 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza1;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento1;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion1;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    } else if (this.pieza2 === true) {
      this.odontogramaoficial.Imagen2 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza2 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento2 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion2 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales2 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos2 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento2 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara2 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza2 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza2;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento2;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion2;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    }  else if (this.pieza3 === true) {
      this.odontogramaoficial.Imagen3 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza3 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento3 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion3 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales3 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos3 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento3 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara3 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza3 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza3;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento3;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion3;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    }  else if (this.pieza4 === true) {
      this.odontogramaoficial.Imagen4 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza4 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento4 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion4 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales4 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos4 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento4 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara4 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza4 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza4;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento4;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion4;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    }  else if (this.pieza5 === true) {
      this.odontogramaoficial.Imagen5 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza5 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento5 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion5 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales5 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos5 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento5 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara5 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza5 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza5;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento5;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion5;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    }  else if (this.pieza6 === true) {
      this.odontogramaoficial.Imagen6 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza6 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento6 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion6 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales6 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos6 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento6 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara6 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza6 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza6;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento6;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion6;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    }  else if (this.pieza7 === true) {
      this.odontogramaoficial.Imagen7 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza7 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento7 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion7 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales7 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos7 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento7 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara7 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza7 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza7;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento7;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion7;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    }  else if (this.pieza8 === true) {
      this.odontogramaoficial.Imagen8 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza8 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento8 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion8 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales8 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos8 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento8 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara8 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza8 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza8;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento8;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion8;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    }  else if (this.pieza9 === true) {
      this.odontogramaoficial.Imagen9 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza9 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento9 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion9 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales9 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos9 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento9 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara9 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza9 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza9;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento9;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion9;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    }  else if (this.pieza10 === true) {
      this.odontogramaoficial.Imagen10 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza10 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento10 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion10 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales10 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos10 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento10 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara10 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza10 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza10;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento10;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion10;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    } else if (this.pieza11 === true) {
      this.odontogramaoficial.Imagen11 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza11 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento11 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion11 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales11 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos11 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento11 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara11 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza11 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza11;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento11;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion11;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    } else if (this.pieza12 === true) {
      this.odontogramaoficial.Imagen12 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza12 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento12 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion12 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales12 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos12 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento12 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara12 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza12 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza12;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento12;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion12;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    } else if (this.pieza13 === true) {
      this.odontogramaoficial.Imagen13 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza13 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento13 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion13 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales13 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos13 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento13 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara13 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza13 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza13;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento13;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion13;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    } else if (this.pieza14 === true) {
      this.odontogramaoficial.Imagen14 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza14 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento14 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion14 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales14 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos14 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento14 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara14 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza14 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza14;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento14;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion14;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    } else if (this.pieza15 === true) {
      this.odontogramaoficial.Imagen15 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza15 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento15 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion15 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales15 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos15 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento15 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara15 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza15 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza15;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento15;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion15;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    } else if (this.pieza16 === true) {
      this.odontogramaoficial.Imagen16 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza16 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento16 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion16 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales16 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos16 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento16 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara16 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza16 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza16;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento16;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion16;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    }  else if (this.pieza17 === true) {
      this.odontogramaoficial.Imagen17 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza17 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento17 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion17 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales17 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos17 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento17 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara17 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza17 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza17;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento17;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion2;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    }  else if (this.pieza18 === true) {
      this.odontogramaoficial.Imagen18 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza18 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento18 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion18 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales18 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos18 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento18 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara18 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza18 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza18;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento18;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion18;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    }  else if (this.pieza19 === true) {
      this.odontogramaoficial.Imagen19 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza19 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento19 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion19 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales19 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos19 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento19 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara19 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza19 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza19;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento19;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion19;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    }  else if (this.pieza20 === true) {
      this.odontogramaoficial.Imagen20 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza20 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento20 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion20 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales20 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos20 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento20 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara20 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza20 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza20;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento20;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion20;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    }  else if (this.pieza21 === true) {
      this.odontogramaoficial.Imagen21 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza21 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento21 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion21 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales21 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos21 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento21 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara21 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza2 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza21;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento21;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion21;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    }  else if (this.pieza22 === true) {
      this.odontogramaoficial.Imagen22 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza22 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento22 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion22 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales22 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos22 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento22 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara22 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza22 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza22;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento22;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion22;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    }  else if (this.pieza23 === true) {
      this.odontogramaoficial.Imagen23 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza23 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento23 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion23 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales23 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos23 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento23 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara23 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza23 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza23;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento23;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion23;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    }  else if (this.pieza24 === true) {
      this.odontogramaoficial.Imagen24 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza24 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento24 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion24 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales24 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos24 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento24 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara2 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza24 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza24;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento24;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion24;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    }  else if (this.pieza25 === true) {
      this.odontogramaoficial.Imagen25 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza25 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento25 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion25 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales25 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos25 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento25 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara25 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza25 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza25;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento25;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion25;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    }  else if (this.pieza26 === true) {
      this.odontogramaoficial.Imagen26 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza26 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento26 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion26 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales26 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos26 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento26 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara26 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza26 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza26;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento26;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion26;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    }  else if (this.pieza27 === true) {
      this.odontogramaoficial.Imagen27 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza27 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento27 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion27 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales27 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos27 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento27 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara27 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza27 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza27;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento27;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion27;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    }  else if (this.pieza28 === true) {
      this.odontogramaoficial.Imagen28 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza28 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento28 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion28 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales28 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos28 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento28 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara28 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza28 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza28;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento28;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion28;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    }  else if (this.pieza29 === true) {
      this.odontogramaoficial.Imagen29 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza29 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento29 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion29 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales29 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos29 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento29 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara29 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza29 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza29;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento29;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion29;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    }  else if (this.pieza30 === true) {
      this.odontogramaoficial.Imagen30 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza30 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento30 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion30 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales30 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos30 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento30 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara30 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza30 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza30;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento30;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion30;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    }  else if (this.pieza31 === true) {
      this.odontogramaoficial.Imagen31 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza31 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento31 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion31 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales31 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos31 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento31 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara31 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza31 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza31;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento31;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion31;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    }  else if (this.pieza32 === true) {
      this.odontogramaoficial.Imagen32 = piezasdentalconpadecimiento.Imagen;
      this.dataApi.getAllProcedimientosaUNpadecimiento(piezasdentalconpadecimiento.NombrePadecimiento)
      .subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
      this.odontogramaoficial.NombrePieza32 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento32 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion32 = piezasdentalconpadecimiento.Ubicacion;
      this.odontogramaoficial.materiales32 = this.procedimientoaPad.materiales;
      this.odontogramaoficial.Instrumentos32 = this.procedimientoaPad.instrumentos;
      this.odontogramaoficial.procedimiento32 =  this.procedimientoaPad.NombreProcedimiento;
      this.odontogramaoficial.cara32 = this.formulario.caraaux;
      this.odontogramaoficial.diagnosticopieza32 = this.formulario.diagnosticoPiezaaux;
      // -------------
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza32;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento32;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion32;
      this.formulario.NombreProcedimientoaux = this.procedimientoaPad.NombreProcedimiento;
      this.formulario.materialesaux = this.procedimientoaPad.materiales;
      this.formulario.instrumentosaux = this.procedimientoaPad.instrumentos;
      const mensaje = confirm('¿Procedera con este procedimiento?');
      if (mensaje) {
       this.vaciarInventario(this.formulario.materialesaux, this.formulario.instrumentosaux);
      } else {

      }
    }
    // tslint:disable-next-line: max-line-length
    this.Mostrarformulario = true;
    this.ngOnInit();
  }
  onChange(e) {
    this.formulario.caraaux = e.target.value;
    }
  guardarpieza() {
    this.odontogramaoficial.idPatient = this.patient.id;
    this.odontogramaoficial.diagnosticoCompleto = this.formulario.diagnosticoPiezaaux;
    console.log(this.odontogramaoficial);
    this.auth.registerOdontograma(
    this.odontogramaoficial.idPatient,
    this.odontogramaoficial.status,
    this.odontogramaoficial.NombrePadecimiento1,
    this.odontogramaoficial.Imagen1,
    this.odontogramaoficial.NombrePadecimiento2,
    this.odontogramaoficial.Imagen2,
    this.odontogramaoficial.NombrePadecimiento3,
    this.odontogramaoficial.Imagen3,
    this.odontogramaoficial.NombrePadecimiento4,
    this.odontogramaoficial.Imagen4,
    this.odontogramaoficial.NombrePadecimiento5,
    this.odontogramaoficial.Imagen5,
    this.odontogramaoficial.NombrePadecimiento6,
    this.odontogramaoficial.Imagen6,
    this.odontogramaoficial.NombrePadecimiento7,
    this.odontogramaoficial.Imagen7,
    this.odontogramaoficial.NombrePadecimiento8,
    this.odontogramaoficial.Imagen8,
    this.odontogramaoficial.NombrePadecimiento9,
    this.odontogramaoficial.Imagen9,
    this.odontogramaoficial.NombrePadecimiento10,
    this.odontogramaoficial.Imagen10,
    this.odontogramaoficial.NombrePadecimiento11,
    this.odontogramaoficial.Imagen11,
    this.odontogramaoficial.NombrePadecimiento12,
    this.odontogramaoficial.Imagen12,
    this.odontogramaoficial.NombrePadecimiento13,
    this.odontogramaoficial.Imagen13,
    this.odontogramaoficial.NombrePadecimiento14,
    this.odontogramaoficial.Imagen14,
    this.odontogramaoficial.NombrePadecimiento15,
    this.odontogramaoficial.Imagen15,
    this.odontogramaoficial.NombrePadecimiento16,
    this.odontogramaoficial.Imagen16,
    this.odontogramaoficial.NombrePadecimiento17,
    this.odontogramaoficial.Imagen17,
    this.odontogramaoficial.NombrePadecimiento18,
    this.odontogramaoficial.Imagen18,
    this.odontogramaoficial.NombrePadecimiento19,
    this.odontogramaoficial.Imagen19,
    this.odontogramaoficial.NombrePadecimiento20,
    this.odontogramaoficial.Imagen20,
    this.odontogramaoficial.NombrePadecimiento21,
    this.odontogramaoficial.Imagen21,
    this.odontogramaoficial.NombrePadecimiento22,
    this.odontogramaoficial.Imagen22,
    this.odontogramaoficial.NombrePadecimiento23,
    this.odontogramaoficial.Imagen23,
    this.odontogramaoficial.NombrePadecimiento24,
    this.odontogramaoficial.Imagen24,
    this.odontogramaoficial.NombrePadecimiento25,
    this.odontogramaoficial.Imagen25,
    this.odontogramaoficial.NombrePadecimiento26,
    this.odontogramaoficial.Imagen26,
    this.odontogramaoficial.NombrePadecimiento27,
    this.odontogramaoficial.Imagen27,
    this.odontogramaoficial.NombrePadecimiento28,
    this.odontogramaoficial.Imagen28,
    this.odontogramaoficial.NombrePadecimiento29,
    this.odontogramaoficial.Imagen29,
    this.odontogramaoficial.NombrePadecimiento30,
    this.odontogramaoficial.Imagen30,
    this.odontogramaoficial.NombrePadecimiento31,
    this.odontogramaoficial.Imagen31,
    this.odontogramaoficial.NombrePadecimiento32,
    this.odontogramaoficial.Imagen32,
    this.odontogramaoficial.diagnosticoCompleto,

    ).subscribe((odontogramaguardado: OdontogramaInterface) => {
      this.odontogramaguardado = odontogramaguardado;

      this.router.navigate(['pacienteseguimiento']);
     } );
    this.MostrarPadecimientos = false;
    this.Mostrarformulario = false;
    this.formulario.caraaux = '';
    this.formulario.diagnosticoPiezaaux = '';

  }
  padecimientod(): void {
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

  verservicios(): void {
    this.router.navigate(['verservicios']);
  }

}
