import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { ServicioInterface } from '../../models/servicios.interface';
import { DataApiService } from '../../services/data-api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modificarservicio',
  templateUrl: './modificarservicio.component.html',
  styleUrls: ['./modificarservicio.component.css']
})
export class ModificarservicioComponent implements OnInit  {

  constructor(private app: AppComponent, private router: Router , private dataApi: DataApiService, private authService: AuthService) { }
  private PiezaRe: ServicioInterface = {

    NombredelServicio: '',
    Descripcion: '',
    Costo: '',
  };
  ngOnInit() {
    this.app.mostrar = true;
    this.PiezaRe = this.authService.getCurrentServicio();
  }

  onRegisterServicio(): void {
    this.authService.updateServicio(
      this.PiezaRe.id,
      this.PiezaRe.NombredelServicio,
      this.PiezaRe.Descripcion,
      this.PiezaRe.Costo,
    ).subscribe(pieza => {
      this.router.navigate(['servicios']);
     } );
    }
    cancelar() {
      this.router.navigate(['servicios']);
    }

}
