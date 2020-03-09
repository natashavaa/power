import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user.interface';
import { DataApiService } from '../../services/data-api.service';
import { AppComponent } from '../../app.component';
import { PiezaDentalInterface } from '../../models/piezadental.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent implements OnInit {


  constructor(private router: Router,
              private dataApi: DataApiService,
              private auth: AuthService,
              private app: AppComponent,
              private _sanitizer: DomSanitizer) { }
  usuarioA: string;
  especialidad: string;
  pepe: string;
  imagePath: any;
  public user: UserInterface = {
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
  public piezadental: PiezaDentalInterface = {
    id: '',
    NombrePieza: '',
    Descripcion: '',
    Nomenclatura: '',
    Ubicacion: '',
    Imagen: '',
    Posicion: '',
  };
  ngOnInit() {
    this.doctor();
    this.app.mostrar = true;
    this.getlistAllPiezasDentales();
  }
  getlistAllPiezasDentales() {
    this.dataApi.getAllPiezasDentales().subscribe((piezadental: PiezaDentalInterface) => {
       this.piezadental = piezadental;
    } );
  }
  convert(imagen) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
       + imagen);
  }
  agregarpieza(): void {
    this.router.navigate(['registerpieza']);
  }

  doctor(): string {
    this.user = this.auth.getCurrentUser();
    if (Object.is(this.user.username, 'admin')) {
        this.usuarioA = 'Administrador';
        console.log(this.usuarioA);
        return this.usuarioA;
    } else {
      this.usuarioA = 'Doctor : ' + this.user.name;
      this.especialidad = 'Especialidad : ' +  this.user.userType;
      console.log(this.usuarioA);
      return  this.usuarioA;

    }
  }
}

