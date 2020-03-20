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

@Component({
  selector: 'app-pacienteodontograma',
  templateUrl: './pacienteodontograma.component.html',
  styleUrls: ['./pacienteodontograma.component.css']
})
export class PacienteodontogramaComponent implements OnInit {

  constructor(private router: Router,private app: AppComponent, private auth: AuthService, private dataApi: DataApiService,
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
  private formulario: FormularioInterface = {
    piezaux: '',
    padecimientoaux: '',
    posicionaux: '',
  };
  private piezasdental: PiezaDentalInterface = {};
  private odontogramaoficial: OdontogramaInterface = {};
  private piezasdentalconpadecimientos: PadecimientoporDienteInterface = {};
  MostrarPadecimientos = false;
  Mostrarformulario = false;
  llenarodontooficialunavez = true;
  ngOnInit() {
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
        this.odontogramaoficial.Imagen2 = this.piezasdental[1].Imagen;
        this.odontogramaoficial.Imagen3 = this.piezasdental[2].Imagen;
        this.odontogramaoficial.Imagen4 = this.piezasdental[3].Imagen;
        this.odontogramaoficial.Imagen5 = this.piezasdental[4].Imagen;
        this.odontogramaoficial.Imagen6 = this.piezasdental[5].Imagen;
        this.odontogramaoficial.Imagen7 = this.piezasdental[6].Imagen;
        this.odontogramaoficial.Imagen8 = this.piezasdental[7].Imagen;
        this.odontogramaoficial.Imagen9 = this.piezasdental[8].Imagen;
        this.odontogramaoficial.Imagen10 = this.piezasdental[9].Imagen;
        this.odontogramaoficial.Imagen11 = this.piezasdental[10].Imagen;
        this.odontogramaoficial.Imagen12 = this.piezasdental[11].Imagen;
        this.odontogramaoficial.Imagen13 = this.piezasdental[12].Imagen;
        this.odontogramaoficial.Imagen14 = this.piezasdental[13].Imagen;
        this.odontogramaoficial.Imagen15 = this.piezasdental[14].Imagen;
        this.odontogramaoficial.Imagen16 = this.piezasdental[15].Imagen;
        this.odontogramaoficial.Imagen17 = this.piezasdental[16].Imagen;
        this.odontogramaoficial.Imagen18 = this.piezasdental[17].Imagen;
        this.odontogramaoficial.Imagen19 = this.piezasdental[18].Imagen;
        this.odontogramaoficial.Imagen20 = this.piezasdental[19].Imagen;
        this.odontogramaoficial.Imagen21 = this.piezasdental[20].Imagen;
        this.odontogramaoficial.Imagen22 = this.piezasdental[21].Imagen;
        this.odontogramaoficial.Imagen23 = this.piezasdental[22].Imagen;
        this.odontogramaoficial.Imagen24 = this.piezasdental[23].Imagen;
        this.odontogramaoficial.Imagen25 = this.piezasdental[24].Imagen;
        this.odontogramaoficial.Imagen26 = this.piezasdental[25].Imagen;
        this.odontogramaoficial.Imagen27 = this.piezasdental[26].Imagen;
        this.odontogramaoficial.Imagen28 = this.piezasdental[27].Imagen;
        this.odontogramaoficial.Imagen29 = this.piezasdental[28].Imagen;
        this.odontogramaoficial.Imagen30 = this.piezasdental[29].Imagen;
        this.odontogramaoficial.Imagen31 = this.piezasdental[30].Imagen;
        this.odontogramaoficial.Imagen32 = this.piezasdental[31].Imagen;


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
    console.log(pieza);
    // tslint:disable-next-line: max-line-length
    this.dataApi.getAllPadecimientosxpiezaporNomeclatura(piezasdental.Nomenclatura).subscribe((piezasdentalconpadecimientos: PadecimientoporDienteInterface) => { this.piezasdentalconpadecimientos = piezasdentalconpadecimientos; console.log(this.piezasdentalconpadecimientos); } );
    console.log(this.piezasdentalconpadecimientos);
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
  llenarFormulario(piezasdentalconpadecimiento: PadecimientoporDienteInterface): void {
    console.log(piezasdentalconpadecimiento.Ubicacion);
    if (this.pieza1 === true ) {
      this.odontogramaoficial.Imagen1 = piezasdentalconpadecimiento.Imagen;
      this.odontogramaoficial.NombrePieza1 = piezasdentalconpadecimiento.NombrePieza;
      this.odontogramaoficial.NombrePadecimiento1 = piezasdentalconpadecimiento.NombrePadecimiento;
      this.odontogramaoficial.Posicion1 = piezasdentalconpadecimiento.Ubicacion;
      this.formulario.piezaux = this.odontogramaoficial.NombrePieza1;
      this.formulario.padecimientoaux = this.odontogramaoficial.NombrePadecimiento1;
      this.formulario.posicionaux = this.odontogramaoficial.Posicion1;
    } else if (this.pieza2 === true) {
      this.odontogramaoficial.Imagen2 = piezasdentalconpadecimiento.Imagen;
    }  else if (this.pieza3 === true) {
      this.odontogramaoficial.Imagen3 = piezasdentalconpadecimiento.Imagen;
    }  else if (this.pieza4 === true) {
      this.odontogramaoficial.Imagen4 = piezasdentalconpadecimiento.Imagen;
    }  else if (this.pieza5 === true) {
      this.odontogramaoficial.Imagen5 = piezasdentalconpadecimiento.Imagen;
    }  else if (this.pieza6 === true) {
      this.odontogramaoficial.Imagen6 = piezasdentalconpadecimiento.Imagen;
    }  else if (this.pieza7 === true) {
      this.odontogramaoficial.Imagen7 = piezasdentalconpadecimiento.Imagen;
    }  else if (this.pieza8 === true) {
      this.odontogramaoficial.Imagen8 = piezasdentalconpadecimiento.Imagen;
    }  else if (this.pieza9 === true) {
      this.odontogramaoficial.Imagen9 = piezasdentalconpadecimiento.Imagen;
    }  else if (this.pieza10 === true) {
      this.odontogramaoficial.Imagen10 = piezasdentalconpadecimiento.Imagen;
    } else if (this.pieza11 === true) {
      this.odontogramaoficial.Imagen11 = piezasdentalconpadecimiento.Imagen;
    } else if (this.pieza12 === true) {
      this.odontogramaoficial.Imagen12 = piezasdentalconpadecimiento.Imagen;
    } else if (this.pieza13 === true) {
      this.odontogramaoficial.Imagen13 = piezasdentalconpadecimiento.Imagen;
    } else if (this.pieza14 === true) {
      this.odontogramaoficial.Imagen14 = piezasdentalconpadecimiento.Imagen;
    } else if (this.pieza15 === true) {
      this.odontogramaoficial.Imagen15 = piezasdentalconpadecimiento.Imagen;
    } else if (this.pieza16 === true) {
      this.odontogramaoficial.Imagen16 = piezasdentalconpadecimiento.Imagen;
    }  else if (this.pieza17 === true) {
      this.odontogramaoficial.Imagen17 = piezasdentalconpadecimiento.Imagen;
    }  else if (this.pieza18 === true) {
      this.odontogramaoficial.Imagen18 = piezasdentalconpadecimiento.Imagen;
    }  else if (this.pieza19 === true) {
      this.odontogramaoficial.Imagen19 = piezasdentalconpadecimiento.Imagen;
    }  else if (this.pieza20 === true) {
      this.odontogramaoficial.Imagen20 = piezasdentalconpadecimiento.Imagen;
    }  else if (this.pieza21 === true) {
      this.odontogramaoficial.Imagen21 = piezasdentalconpadecimiento.Imagen;
    }  else if (this.pieza22 === true) {
      this.odontogramaoficial.Imagen22 = piezasdentalconpadecimiento.Imagen;
    }  else if (this.pieza23 === true) {
      this.odontogramaoficial.Imagen23 = piezasdentalconpadecimiento.Imagen;
    }  else if (this.pieza24 === true) {
      this.odontogramaoficial.Imagen24 = piezasdentalconpadecimiento.Imagen;
    }  else if (this.pieza25 === true) {
      this.odontogramaoficial.Imagen25 = piezasdentalconpadecimiento.Imagen;
    }  else if (this.pieza26 === true) {
      this.odontogramaoficial.Imagen26 = piezasdentalconpadecimiento.Imagen;
    }  else if (this.pieza27 === true) {
      this.odontogramaoficial.Imagen27 = piezasdentalconpadecimiento.Imagen;
    }  else if (this.pieza28 === true) {
      this.odontogramaoficial.Imagen28 = piezasdentalconpadecimiento.Imagen;
    }  else if (this.pieza29 === true) {
      this.odontogramaoficial.Imagen29 = piezasdentalconpadecimiento.Imagen;
    }  else if (this.pieza30 === true) {
      this.odontogramaoficial.Imagen30 = piezasdentalconpadecimiento.Imagen;
    }  else if (this.pieza31 === true) {
      this.odontogramaoficial.Imagen31 = piezasdentalconpadecimiento.Imagen;
    }  else if (this.pieza32 === true) {
      this.odontogramaoficial.Imagen32 = piezasdentalconpadecimiento.Imagen;
    }
    // tslint:disable-next-line: max-line-length
    this.Mostrarformulario = true;
    this.ngOnInit();
  }
  llenarFormularioP2(piezasdentalconpadecimiento: PadecimientoporDienteInterface): void {
    this.odontogramaoficial.Imagen2 = piezasdentalconpadecimiento.Imagen,
    console.log(piezasdentalconpadecimiento);
    // tslint:disable-next-line: max-line-length
    this.Mostrarformulario = true;
    this.ngOnInit();
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
}
