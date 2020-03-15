import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { AppComponent } from '../../app.component';
import { PiezaDentalInterface } from '../../models/piezadental.interface';
import { PadecimientoInterface } from '../../models/padecimiento.interface';
import { AuthService } from 'src/app/services/auth.service';
import { PadecimientoporDienteInterface } from '../../models/piezaconPadecimiento.interface';

@Component({
  selector: 'app-padecimiento-adiente',
  templateUrl: './padecimiento-adiente.component.html',
  styleUrls: ['./padecimiento-adiente.component.css']
})
export class PadecimientoADienteComponent implements OnInit {

  constructor(private router: Router , private dataApi: DataApiService, private authService: AuthService,
              private app: AppComponent) { }
public piezadental: PiezaDentalInterface = {};
public Padpordiente: PadecimientoporDienteInterface = {
  id: '',
  NombrePadecimiento: '',
  NombrePieza: '',
  Imagen: '',
  Nomenclatura: '',
  Posicion: '',
};
public padecimiento: PadecimientoInterface = { };
imageSrc;
  sellersPermitFile: any;
  DriversLicenseFile: any;
  InteriorPicFile: any;
  ExteriorPicFile: any;
  // base64s
  sellersPermitString: string;
  DriversLicenseString: string;
  InteriorPicString: string;
  ExteriorPicString: string;
  currentId = 0;
    ngOnInit() {
      this.app.mostrar = true;
      this.getlistAllPiezasDentales();
      this. getlistAllPadecimientos();
    }

    onRegisterPadecimientoADiente() {
      this.Padpordiente.Imagen = this.sellersPermitString;
      this.authService.registerProcedimientoPorPieza(
        this.Padpordiente.NombrePadecimiento,
        this.Padpordiente.NombrePieza,
        this.Padpordiente.Imagen,
        this.Padpordiente.Nomenclatura,
        this.Padpordiente.Posicion,
      ).subscribe(pieza => {
        this.router.navigate(['padecimiento']);
       } );
    }
    getlistAllPiezasDentales() {
    this.dataApi.getAllPiezasDentales().subscribe((piezadental: PiezaDentalInterface) => ( this.piezadental = piezadental));
    }
    getlistAllPadecimientos() {
      this.dataApi.getAllPadecimientos().subscribe((padecimiento: PadecimientoInterface) => ( this.padecimiento = padecimiento));
    }
    cancelar() {
      this.router.navigate(['padecimiento']);
    }
    getPieza(piezadental: PiezaDentalInterface) {
      this.Padpordiente.Posicion = piezadental.Posicion;
      this.Padpordiente.Nomenclatura = piezadental.Nomenclatura;
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
}
