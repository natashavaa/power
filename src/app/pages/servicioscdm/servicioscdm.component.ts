import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { ServicioInterface } from '../../models/servicios.interface';
import { AppComponent } from '../../app.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-servicioscdm',
  templateUrl: './servicioscdm.component.html',
  styleUrls: ['./servicioscdm.component.css']
})
export class ServicioscdmComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private dataApi: DataApiService, private app: AppComponent) { }
  private servicios: ServicioInterface = {

    NombredelServicio: '',
    Descripcion: '',
    Costo: '',
  }
  agregarservicio(): void {
    this.router.navigate(['registerservicios']);
  }

  ngOnInit() {
    this.app.mostrar = true;
    this.getlistAllServicios();
  }
  getlistAllServicios() {
    this.dataApi.getAllServicios().subscribe((servicios: ServicioInterface) => {
       this.servicios = servicios;
    } );
  }
  ReponerMaterial(pieza: ServicioInterface): void {
    this.auth.setServicio(pieza);
    this.router.navigate(['modiicarservicio']);
     }

  eliminarMaterial(pieza: ServicioInterface): void {
    this.auth.deleteServicio(pieza.id).subscribe(data => {

      this.ngOnInit();
     } );
  }

}
