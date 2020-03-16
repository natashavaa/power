import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { DataApiService } from '../../services/data-api.service';
import { AuthService } from '../../services/auth.service';
import { PiezaDentalInterface } from '../../models/piezadental.interface';
import { PadecimientoInterface } from '../../models/padecimiento.interface';

@Component({
  selector: 'app-modificarpadecimiento',
  templateUrl: './modificarpadecimiento.component.html',
  styleUrls: ['./modificarpadecimiento.component.css']
})
export class ModificarpadecimientoComponent implements OnInit {

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
this.PadecimientoRe = this.authService.getCurrentPadecimiento();
}
getlistAllPiezasDentales() { // no las uso aca
this.dataApi.getAllPiezasDentales().subscribe((piezadental: PiezaDentalInterface) => ( this.piezadental = piezadental));
}
onRegisterPadecimiento() {
this.authService.updatePadecimiento(
  this.PadecimientoRe.id,
this.PadecimientoRe.NombrePadecimiento,
this.PadecimientoRe.Descripcion,
).subscribe(pieza => {
this.router.navigate(['padecimiento']);
} );

}
cancelar() {
this.router.navigate(['padecimiento']);
}

}
