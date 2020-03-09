import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { AuthService } from '../../services/auth.service';
import { AppComponent } from '../../app.component';
import { UserInterface } from '../../models/user.interface';
import { PadecimientoInterface } from '../../models/padecimiento.interface';
import { PadecimientoporDienteInterface } from '../../models/piezaconPadecimiento.interface';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-padecimiento',
  templateUrl: './padecimiento.component.html',
  styleUrls: ['./padecimiento.component.css']
})
export class PadecimientoComponent implements OnInit {
  usuarioA: string;
  especialidad: string;
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
  public padecimiento: PadecimientoInterface = { };
  public padecimientoxdiente: PadecimientoporDienteInterface = { };
  constructor(private router: Router,
              private dataApi: DataApiService,
              private auth: AuthService,
              private app: AppComponent,
              private _sanitizer: DomSanitizer ) { }

  ngOnInit() {
    this.doctor();
    this.app.mostrar = true;
    this.getlistAllPadecimientos();
    this.getlistAllPadecimientosporDiente();
  }
  getlistAllPadecimientos() {
    this.dataApi.getAllPadecimientos().subscribe((padecimiento: PadecimientoInterface) => ( this.padecimiento = padecimiento));
  }
  getlistAllPadecimientosporDiente() {
    // tslint:disable-next-line: max-line-length
    this.dataApi.getAllPadecimientoPorPieza().subscribe((padecimientoxdiente: PadecimientoporDienteInterface) => ( this.padecimientoxdiente = padecimientoxdiente));
  }
  convert(imagen) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
       + imagen);
  }
  agregarpadecimiento(): void {
    this.router.navigate(['registerpadecimiento']);
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
  agrgegarpadecimientoAdiente() {
    this.router.navigate(['padecimientoDiente']);
  }
}
