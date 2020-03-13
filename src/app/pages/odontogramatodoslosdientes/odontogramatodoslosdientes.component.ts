import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-odontogramatodoslosdientes',
  templateUrl: './odontogramatodoslosdientes.component.html',
  styleUrls: ['./odontogramatodoslosdientes.component.css']
})
export class OdontogramatodoslosdientesComponent implements OnInit {

  momentoC: string;
  constructor(private router: Router, private app: AppComponent) { }

  ngOnInit() {
    this.app.mostrar = true;
  }
  getType(): void {
    if ( Object.is(this.momentoC, 'Diente por Diente')) {
      this.router.navigate(['pacienteodontograma']);
    } else if ( Object.is(this.momentoC, 'Todos los Dientes')) {
      this.router.navigate(['todoslosdientes']);
    } else if (Object.is(this.momentoC, 'Ortodoncia')) {
      this.router.navigate(['ortodoncia']);
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
  recipe(): void {
    this.router.navigate(['pacienterecipe']);
  }
  presupuesto(): void {
    this.router.navigate(['pacientepresupuesto']);
  }


  informe(): void {
    this.router.navigate(['pacienteinforme']);
  }

}
