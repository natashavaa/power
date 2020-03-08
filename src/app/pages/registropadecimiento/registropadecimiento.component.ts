import { Component, OnInit } from '@angular/core';
import { PiezaDentalInterface } from '../../models/piezadental.interface';
import { AuthService } from '../../services/auth.service';
import { DataApiService } from '../../services/data-api.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { PadecimientoInterface } from '../../models/padecimiento.interface';

@Component({
  selector: 'app-registropadecimiento',
  templateUrl: './registropadecimiento.component.html',
  styleUrls: ['./registropadecimiento.component.css']
})
export class RegistropadecimientoComponent implements OnInit {

  constructor(private router: Router , private dataApi: DataApiService, private authService: AuthService,
              private app: AppComponent) { }
  public piezadental: PiezaDentalInterface = {};
  public PadecimientoRe: PadecimientoInterface = {
    id: '',
    NombrePadecimiento: '',
    Descripcion: '',

  };
  ngOnInit() {
    this.app.mostrar = true;
    this.getlistAllPiezasDentales();
  }
  getlistAllPiezasDentales() { // no las uso aca
    this.dataApi.getAllPiezasDentales().subscribe((piezadental: PiezaDentalInterface) => ( this.piezadental = piezadental));
  }
  onRegisterPadecimiento() {
    this.authService.registerPadecimiento(
      this.PadecimientoRe.NombrePadecimiento,
      this.PadecimientoRe.Descripcion,
    ).subscribe(pieza => {
      this.router.navigate(['padecimiento']);
     } );

  }

}
