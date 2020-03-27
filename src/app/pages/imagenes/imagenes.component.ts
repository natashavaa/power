import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { PaatientInterface } from '../../models/patients.interface';
import { AppComponent } from '../../app.component';
import { AuthService } from '../../services/auth.service';
import { EvolutionInterface } from '../../models/evolution.interface';
import { DataApiService } from '../../services/data-api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  constructor(public productosService: ProductosService, private router: Router,
              private app: AppComponent, private auth: AuthService, private dataApi: DataApiService,
              private _sanitizer: DomSanitizer  ) { }
  private patient: PaatientInterface;
  private EvolutionRe: EvolutionInterface = {

    idPatient: '',
    idClinicHistory: '',
    imagen: '',
    diagnostic: '',
  };
  private evolution: EvolutionInterface = {

    idPatient: '',
    idClinicHistory: '',
    imagen: '',
    diagnostic: '',
  };
  sellersPermitFile: any;
  sellersPermitString: string;
  currentId = 0;
  getPatient() {
    this.patient = this.auth.getCurrentPatient();

  }
  ngOnInit() {
    this.app.mostrar = true;
    this.getPatient();
    this.getlistEvlution();
  }
  convert(imagen) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
       + imagen);
  }
  getlistEvlution() {
    this.app.mostrar = true;
    this.patient = this.auth.getCurrentPatient();
    this.dataApi.getAllEvolutionBypatient(this.patient.id)
    .subscribe((evolution: EvolutionInterface) => {this.evolution = evolution;
                                                  } );
  }
  onRegisterEvolution(): void {
    this.EvolutionRe.imagen = this.sellersPermitString;
    this.EvolutionRe.idPatient = this.patient.id;
    this.EvolutionRe.idClinicHistory = '1';
    this.auth.registerEvolution(
      this.EvolutionRe.idPatient,
      this.EvolutionRe.idClinicHistory,
      this.EvolutionRe.imagen,
      this.EvolutionRe.diagnostic,
    ).subscribe(evolution => {
      this.ngOnInit();
     } );
    this.ngOnInit();
    this.router.navigate(['historiaclinica']);
    }
    public picked(event, field) {
      this.currentId = field;
      const fileList: FileList = event.target.files;
      if (fileList.length > 0) {
        const file: File = fileList[0];
        if (field === 1) {
          this.sellersPermitFile = file;
          this.handleInputChange(file); // turn into base64
        }
      } else {
        alert('No file selected');
      }
    }

    handleInputChange(files) {
      const file = files;
      const pattern = /image-*/;
      const reader = new FileReader();
      if (!file.type.match(pattern)) {
        alert('invalid format');
        return;
      }
      reader.onloadend = this._handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
    }
    _handleReaderLoaded(e) {
      const reader = e.target;
      const base64result = reader.result.substr(reader.result.indexOf(',') + 1);
      // this.imageSrc = base64result;
      const id = this.currentId;
      switch (id) {
        case 1:
          this.sellersPermitString = base64result;
          break;
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

  informacion(): void {
    this.router.navigate(['pacienteinformacion']);
  }
  recipe(): void {
    this.router.navigate(['pacienterecipe']);
  }
  historia(): void {
    this.router.navigate(['global']);
  }

  presupuesto(): void {
    this.router.navigate(['pacientepresupuesto']);
  }

  verservicios(): void {
    this.router.navigate(['verservicios']);
  }


  informe(): void {
    this.router.navigate(['pacienteinforme']);
  }

}
