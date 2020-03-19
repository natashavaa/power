import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { AuthService } from '../../services/auth.service';
import { DataApiService } from '../../services/data-api.service';
import { PiezaDentalInterface } from '../../models/piezadental.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { PadecimientoporDienteInterface } from '../../models/piezaconPadecimiento.interface';

@Component({
  selector: 'app-pacienteodontograma',
  templateUrl: './pacienteodontograma.component.html',
  styleUrls: ['./pacienteodontograma.component.css']
})
export class PacienteodontogramaComponent implements OnInit {

  constructor(private router: Router,private app: AppComponent, private auth: AuthService, private dataApi: DataApiService,
              private _sanitizer: DomSanitizer) { }
  momentoC: string;
  private piezasdental: PiezaDentalInterface = {};
  private piezasdentalconpadecimientos: PadecimientoporDienteInterface = {};
  MostrarPadecimientos = false;
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
    this.dataApi.getAllPiezasDentales().subscribe((piezasdentales: PiezaDentalInterface) => { this.piezasdental = piezasdentales; console.log(this.piezasdental); } );
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

  padecimiento(piezasdental: PiezaDentalInterface): void {
    console.log(piezasdental);
    // tslint:disable-next-line: max-line-length
    this.dataApi.getAllPadecimientosxpiezaporNomeclatura(piezasdental.Nomenclatura).subscribe((piezasdentalconpadecimientos: PadecimientoporDienteInterface) => { this.piezasdentalconpadecimientos = piezasdentalconpadecimientos; console.log(this.piezasdentalconpadecimientos); } );
    this.MostrarPadecimientos = true;
    this.ngOnInit();
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
