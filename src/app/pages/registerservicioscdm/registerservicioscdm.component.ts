import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DataApiService } from '../../services/data-api.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { ServicioInterface } from '../../models/servicios.interface';

@Component({
  selector: 'app-registerservicioscdm',
  templateUrl: './registerservicioscdm.component.html',
  styleUrls: ['./registerservicioscdm.component.css']
})
export class RegisterservicioscdmComponent implements OnInit {

  constructor(private app: AppComponent, private router: Router , private dataApi: DataApiService, private authService: AuthService) { }
  private PiezaRe: ServicioInterface = {

    NombredelServicio: '',
    Descripcion: '',
    Costo: '',
  };
  ngOnInit() {
    this.app.mostrar = true;
  }

  onRegisterServicio(): void {
    this.authService.registerServicio(
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
