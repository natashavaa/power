import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { AppComponent } from '../../app.component';
import { PiezaDentalInterface } from '../../models/piezadental.interface';
import { PadecimientoInterface } from '../../models/padecimiento.interface';
import { AuthService } from 'src/app/services/auth.service';
import { PadecimientoporDienteInterface } from '../../models/piezaconPadecimiento.interface';

@Component({
  selector: 'app-padecimiento-adiente',
  templateUrl: './padecimiento-adiente.component.html',
  styleUrls: ['./padecimiento-adiente.component.css']
})
export class PadecimientoADienteComponent implements OnInit {

  constructor(private router: Router , private dataApi: DataApiService, private authService: AuthService,
              private app: AppComponent) { }
public piezadental: PiezaDentalInterface = {};
public Padpordiente: PadecimientoporDienteInterface = {
  id: '',
  NombrePadecimiento: '',
  NombrePieza: '',
  Imagen: '',
};
public padecimiento: PadecimientoInterface = { };
    ngOnInit() {
      this.app.mostrar = true;
      this.getlistAllPiezasDentales();
      this. getlistAllPadecimientos();
    }
    getlistAllPiezasDentales() {
    this.dataApi.getAllPiezasDentales().subscribe((piezadental: PiezaDentalInterface) => ( this.piezadental = piezadental));
    }
    getlistAllPadecimientos() {
      this.dataApi.getAllPadecimientos().subscribe((padecimiento: PadecimientoInterface) => ( this.padecimiento = padecimiento));
    }
    cancelar() {
      this.router.navigate(['padecimiento']);
    }
}
