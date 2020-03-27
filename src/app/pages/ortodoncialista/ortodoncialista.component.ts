import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { OrtodonciaInterface } from '../../models/ortodoncia.interface';
import { FormControl } from '@angular/forms';
import { DataApiService } from '../../services/data-api.service';
import { AuthService } from '../../services/auth.service';
import { PaatientInterface } from '../../models/patients.interface';
import { OdontogramaInterface } from '../../models/odontograma.interface';


@Component({
  selector: 'app-ortodoncialista',
  templateUrl: './ortodoncialista.component.html',
  styleUrls: ['./ortodoncialista.component.css']
})
export class OrtodoncialistaComponent implements OnInit {

  constructor(private router: Router, private app: AppComponent, private auth: AuthService, private dataApi: DataApiService) { }
  momentoC: string;
  // tslint:disable-next-line: max-line-length
  toppingList: string[] = ['Diastema', 'Vestibulizacion de los incisivos superiores', 'Apiñamiento Leve', 'Apiñamiento Moderado', 'Apiñamiento Severo', 'Mordida Profunda', 'Mordida abierta anterior', 'Biprotrusión'];
  private Ortodonciarecibidos: OrtodonciaInterface = {};
  private patient: PaatientInterface = {};
 // private material: MaterialInterface;
 // private instrumentos: InstrumentoInterface;
  ngOnInit() {
    this.app.mostrar = true;
    this.patient = this.auth.getCurrentPatient();
    this.getAllPiezasdentales();
  }

  getAllPiezasdentales() {
    // tslint:disable-next-line: max-line-length
    this.dataApi.getAllodontogramasdeOrtodoncia(this.patient.id).subscribe((Ortodonciarecibidos: OrtodonciaInterface) => {
       this.Ortodonciarecibidos = Ortodonciarecibidos;
      } );
  }
  iradetalles(ortodoncia: OrtodonciaInterface) {
    this.auth.setodortodoncia(ortodoncia);
    this.router.navigate(['listaOrtodonciadetalle']);
  }
  getType(): void {
    if ( Object.is(this.momentoC, 'Diente por Diente')) {
      this.router.navigate(['pacienteseguimiento']);
    } else if ( Object.is(this.momentoC, 'Todos los Dientes')) {
      this.router.navigate(['seguimientotodoslosdientes']);
    } else if (Object.is(this.momentoC, 'Ortodoncia')) {
      this.router.navigate(['listaOrtodoncia']);
    }
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

  padecimiento(): void {
    this.router.navigate(['pacientepadecimiento']);
  }

  informacion(): void {
    this.router.navigate(['pacienteinformacion']);
  }

  todos(): void {
    this.router.navigate(['todoslosdientes']);
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

  verservicios(): void {
    this.router.navigate(['verservicios']);
  }

}
