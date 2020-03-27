import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { OrtodonciaInterface } from '../../models/ortodoncia.interface';
import { FormControl } from '@angular/forms';
import { DataApiService } from '../../services/data-api.service';
import { AuthService } from '../../services/auth.service';
import { PaatientInterface } from '../../models/patients.interface';

@Component({
  selector: 'app-ortodoncia',
  templateUrl: './ortodoncia.component.html',
  styleUrls: ['./ortodoncia.component.css']
})
export class OrtodonciaComponent implements OnInit {

  constructor(private router: Router, private app: AppComponent, private auth: AuthService, private dataApi: DataApiService) { }
  momentoC: string;
  clase1Molar1 = false;
  clase2Molar1 = false;
  clase3Molar1 = false;
  clase1Molar2 = false;
  clase2Molar2 = false;
  clase3Molar2 = false;
  opcionesArray = new FormControl();
  opcionesArray2 = new FormControl();
  // tslint:disable-next-line: max-line-length
  toppingList: string[] = ['Diastema', 'Vestibulizacion de los incisivos superiores', 'Apiñamiento Leve', 'Apiñamiento Moderado', 'Apiñamiento Severo', 'Mordida Profunda', 'Mordida abierta anterior', 'Biprotrusión'];
  // tslint:disable-next-line: max-line-length
  toppingList2: string[] = ['Diastema', 'Vestibulizacion de los incisivos superiores', 'Apiñamiento Leve', 'Apiñamiento Moderado', 'Apiñamiento Severo', 'Mordida Profunda', 'Mordida abierta anterior', 'Biprotrusión'];
  private ortodoncia: OrtodonciaInterface = {};
  private patient: PaatientInterface = {};
 // private material: MaterialInterface;
 // private instrumentos: InstrumentoInterface;
  ngOnInit() {
    this.app.mostrar = true;
    this.patient = this.auth.getCurrentPatient();
  }
  onCheckboxChange(e) {
    if (Object.is( e.target.value, 'Clase 1')) {
      this.clase1Molar1 = true;
      this.clase2Molar1 = false;
      this.clase3Molar1 = false;
    } else  if (Object.is( e.target.value, 'Clase 2')) {
      this.clase1Molar1 = false;
      this.clase2Molar1 = true;
      this.clase3Molar1 = false;
    } else  if (Object.is( e.target.value, 'Clase 3')) {
      this.clase1Molar1 = false;
      this.clase2Molar1 = false;
      this.clase3Molar1 = true;
    }


    }
    onCheckboxChange2(e) {
      if (Object.is( e.target.value, 'Clase 1')) {
        this.clase1Molar2 = true;
        this.clase2Molar2 = false;
        this.clase3Molar2 = false;
      } else  if (Object.is( e.target.value, 'Clase 2')) {
        this.clase1Molar2 = false;
        this.clase2Molar2 = true;
        this.clase3Molar2 = false;
      } else  if (Object.is( e.target.value, 'Clase 3')) {
        this.clase1Molar2 = false;
        this.clase2Molar2 = false;
        this.clase3Molar2 = true;
      }


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
  guardar() {
    this.ortodoncia.idPatient = this.patient.id;
    if (this.clase1Molar1 === true) {
      this.ortodoncia.DivisionesMolar1 = this.opcionesArray.value.map(x => x).join(' , ');
    }
    if (this.clase1Molar2 === true) {
      this.ortodoncia.DivisionesMolar2 = this.opcionesArray2.value.map(x => x).join(' , ');

    }
    this.auth.registerOrtodoncia(
        this.ortodoncia.idPatient,
        this.ortodoncia.imagen,
        this.ortodoncia.Medicaciones,
        this.ortodoncia.PlandeTratamiento,
        this.ortodoncia.Diagnostico,
        this.ortodoncia.ClaseCanina1,
        this.ortodoncia.ClaseCanina2,
        this.ortodoncia.ClasificacionAngleCanina1,
        this.ortodoncia.ClasificacionAngleCanina2,
        this.ortodoncia.ClaseMolar1,
        this.ortodoncia.ClaseMolar2,
        this.ortodoncia.ClasificacionAngleMolar1,
        this.ortodoncia.ClasificacionAngleMolar2,
        this.ortodoncia.DivisionesMolar1,
        this.ortodoncia.DivisionesMolarV1,
        this.ortodoncia.DivisionesMolar2,
        this.ortodoncia.DivisionesMolarV2,
        this.ortodoncia.CategoriasMolar1,
        this.ortodoncia.CategoriasMolar2,
        this.ortodoncia.ClaseEsqueletalClasificacionAngle,
        this.ortodoncia.Overjet,
        this.ortodoncia.OverBite,
        this.ortodoncia.LineaMedia,
        this.ortodoncia.TipodePerfil,
        this.ortodoncia.gOGNPMAX,
        this.ortodoncia.sUPINF,
        this.ortodoncia.aNB,
        this.ortodoncia.sNB,
        this.ortodoncia.sNA,
        this.ortodoncia.sNGN,
        this.ortodoncia.nAPOG,
        this.ortodoncia.sNGOGN,
        this.ortodoncia.sNPLO,
        this.ortodoncia.sNFH,
    ).subscribe(ortodoncia => {

     } );
    this.router.navigate(['listaOrtodoncia']);

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

  verservicios(): void {
    this.router.navigate(['verservicios']);
  }



  presupuesto(): void {
    this.router.navigate(['pacientepresupuesto']);
  }


  informe(): void {
    this.router.navigate(['pacienteinforme']);
  }

}
