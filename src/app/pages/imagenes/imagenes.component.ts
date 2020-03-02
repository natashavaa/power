import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { PaatientInterface } from '../../models/patients.interface';
import { AppComponent } from '../../app.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  constructor(public productosService: ProductosService, private router: Router,
              private app: AppComponent, private auth: AuthService  ) { }
  private patient: PaatientInterface;
  getPatient() {
    this.patient = this.auth.getCurrentPatient();

  }
  ngOnInit() {
    this.app.mostrar = true;
    this.getPatient();
  }

  datos(): void {
    this.router.navigate(['historiaclinica']);
  }

  imagen(): void {
    this.router.navigate(['imagenes']);
  }

  consulta(): void {
    this.router.navigate(['pacienteconsulta']);
  }

  procedimiento(): void {
    this.router.navigate(['pacienteprocedimiento']);
  }

  seguimiento(): void {
    this.router.navigate(['pacienteseguimiento']);
  }

  odontograma(): void {
    this.router.navigate(['pacienteodontograma']);
  }

  informacion(): void {
    this.router.navigate(['pacienteinformacion']);
  }
  recipe(): void {
    this.router.navigate(['pacienterecipe']);
  }
  historia(): void {
    this.router.navigate(['global']);
  }



}
