import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { ServicioInterface } from '../../models/servicios.interface';
import { AppComponent } from '../../app.component';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from 'src/app/models/user.interface';

@Component({
  selector: 'app-servicioscdm',
  templateUrl: './servicioscdm.component.html',
  styleUrls: ['./servicioscdm.component.css']
})
export class ServicioscdmComponent implements OnInit {
  usuarioA: string;
  especialidad: string;
  constructor(private auth: AuthService, private router: Router, private dataApi: DataApiService, private app: AppComponent) { }
  private servicios: ServicioInterface = {

    NombredelServicio: '',
    Descripcion: '',
    Costo: '',
  };
  public user2: UserInterface = {
    id: '',
    name: '',
    dni: '',
    age: 0,
    sex: '',
    mail: '',
    password: '',
    userType: '',
    username: '',
    phone: ''


};
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
  doctor(): string {
    this.user2 = this.auth.getCurrentUser();
    if (Object.is(this.user2.username, 'admin')) {
        this.usuarioA = 'Administrador';
        return this.usuarioA;
    } else {
      this.usuarioA = 'Doctor : ' + this.user2.name;
      this.especialidad = 'Especialidad : ' +  this.user2.userType;
      return  this.usuarioA;

    }
  }
}
