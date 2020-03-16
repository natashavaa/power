import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DataApiService } from '../../services/data-api.service';
import { PiezaDentalInterface } from '../../models/piezadental.interface';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-registropieza',
  templateUrl: './registropieza.component.html',
  styleUrls: ['./registropieza.component.css']
})
export class RegistropiezaComponent implements OnInit {
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
  constructor(private router: Router , private dataApi: DataApiService, private authService: AuthService,
              private app: AppComponent) { }
  private PiezaRe: PiezaDentalInterface = {

    NombrePieza: '',
    Descripcion: '',
    Nomenclatura: '',
    Ubicacion: '',
    Imagen: '',
    Posicion: '',
  };
   file;
   imagen: string;
  ngOnInit() {
    this.app.mostrar = true;
  }
  cancelar() {
    this.router.navigate(['mantenimiento']);
  }
  onRegisterPiezaDental(): void {
      this.PiezaRe.Imagen = this.sellersPermitString;
      console.log(this.PiezaRe.Imagen); // REVISAR NO ESTA GUARDANDO IMAGENES
      this.authService.registerPiezaDental(
        this.PiezaRe.NombrePieza,
        this.PiezaRe.Descripcion,
        this.PiezaRe.Nomenclatura,
        this.PiezaRe.Ubicacion,
        this.PiezaRe.Imagen,
        this.PiezaRe.Posicion
      ).subscribe(pieza => {
        this.router.navigate(['mantenimiento']);
       } );
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
