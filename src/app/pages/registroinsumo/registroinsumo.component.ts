import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { AuthService } from '../../services/auth.service';
import { InstrumentoInterface } from '../../models/instrumento.interface';
import { UserInterface } from '../../models/user.interface';

@Component({
  selector: 'app-registroinsumo',
  templateUrl: './registroinsumo.component.html',
  styleUrls: ['./registroinsumo.component.css']
})
export class RegistroinsumoComponent implements OnInit {

  constructor(private router: Router  , private dataApi: DataApiService,private authService: AuthService) { }

  private instrumentoRe: InstrumentoInterface = {
    id: '',
    name: '',
    especiality: '',
    costo: '',
    cantidad: '',
  };
  private user2: UserInterface = {
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
  ngOnInit() {
  }
  onRegisterInstrumento(): void {
    this.user2 = this.authService.getCurrentUser();
    this.instrumentoRe.idDoctor = this.user2.id;
    this.authService.registerInstrumento(
      this.instrumentoRe.name,
      this.instrumentoRe.cantidad,
      this.instrumentoRe.especiality,
      this.instrumentoRe.costo,
      this.instrumentoRe.idDoctor
    ).subscribe(instrumento => {
      console.log(instrumento);
      this.router.navigate(['especialidad']);
     } );
    }
  cancelar() {
    this.router.navigate(['especialidad']);
  }
}
