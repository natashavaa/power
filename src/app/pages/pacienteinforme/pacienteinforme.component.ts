import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaatientInterface } from '../../models/patients.interface';
import { AppComponent } from '../../app.component';
import { DataApiService } from '../../services/data-api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-pacienteinforme',
  templateUrl: './pacienteinforme.component.html',
  styleUrls: ['./pacienteinforme.component.css']
})
export class PacienteinformeComponent implements OnInit {

  constructor(private router: Router, private dataApi: DataApiService, private authService: AuthService, private app: AppComponent) { }
  private patient: PaatientInterface;

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

  presupuesto(): void {
    this.router.navigate(['pacientepresupuesto']);
  }

  informe(): void {
    this.router.navigate(['pacienteinforme']);
  }

  ngOnInit() {
    this.app.mostrar = true;
    this.patient = this.authService.getCurrentPatient();
  }

}
