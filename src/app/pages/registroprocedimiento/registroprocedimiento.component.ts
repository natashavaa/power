import { Component, OnInit } from '@angular/core';
import { ProcedimientoInterface } from '../../models/procedimiento.interface';
import { Router } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { AuthService } from '../../services/auth.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-registroprocedimiento',
  templateUrl: './registroprocedimiento.component.html',
  styleUrls: ['./registroprocedimiento.component.css']
})
export class RegistroprocedimientoComponent implements OnInit {

  constructor(private router: Router , private dataApi: DataApiService, private authService: AuthService, private app: AppComponent) { }
  public procedimientoRe: ProcedimientoInterface = {
    id: '',
    NombreProcedimiento: '',
    Descripcion: '',
    Estatus: '',
    costo: '',

  };
  ngOnInit() {
    this.app.mostrar = true;
  }
  onRegisterProcedimiento(): void {
    this.authService.registerProcedimiento(
      this.procedimientoRe.NombreProcedimiento,
      this.procedimientoRe.Descripcion,
      this.procedimientoRe.Estatus,
      this.procedimientoRe.costo,
    ).subscribe(pieza => {
      this.router.navigate(['procedimiento']);
     } );
  }
  cancelar() {
    this.router.navigate(['procedimiento']);
  }
}
