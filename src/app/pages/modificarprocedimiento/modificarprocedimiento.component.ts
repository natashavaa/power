import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProcedimientoInterface } from '../../models/procedimiento.interface';
import { DataApiService } from '../../services/data-api.service';
import { AuthService } from 'src/app/services/auth.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-modificarprocedimiento',
  templateUrl: './modificarprocedimiento.component.html',
  styleUrls: ['./modificarprocedimiento.component.css']
})
export class ModificarprocedimientoComponent implements OnInit {

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
    this.procedimientoRe = this.authService.getCurrentProcedimiento();
  }
  onRegisterProcedimiento(): void {
    this.authService.updateProcedimiento(
      this.procedimientoRe.id,
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
