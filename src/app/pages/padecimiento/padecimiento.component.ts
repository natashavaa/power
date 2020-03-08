import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { AuthService } from '../../services/auth.service';
import { AppComponent } from '../../app.component';
import { UserInterface } from '../../models/user.interface';
import { PadecimientoInterface } from '../../models/padecimiento.interface';

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
  constructor(private router: Router,
              private dataApi: DataApiService,
              private auth: AuthService,
              private app: AppComponent ) { }

  ngOnInit() {
    this.doctor();
    this.app.mostrar = true;
    this.getlistAllPadecimientos();
  }
  getlistAllPadecimientos() {
    this.dataApi.getAllPadecimientos().subscribe((padecimiento: PadecimientoInterface) => ( this.padecimiento = padecimiento));
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
