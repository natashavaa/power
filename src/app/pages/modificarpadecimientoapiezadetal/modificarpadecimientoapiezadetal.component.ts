import { Component, OnInit } from '@angular/core';
import { PiezaDentalInterface } from '../../models/piezadental.interface';
import { PadecimientoInterface } from '../../models/padecimiento.interface';
import { Router } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { PadecimientoporDienteInterface } from '../../models/piezaconPadecimiento.interface';
import { AuthService } from 'src/app/services/auth.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-modificarpadecimientoapiezadetal',
  templateUrl: './modificarpadecimientoapiezadetal.component.html',
  styleUrls: ['./modificarpadecimientoapiezadetal.component.css']
})
export class ModificarpadecimientoapiezadetalComponent implements OnInit {

  constructor(private router: Router , private dataApi: DataApiService, private authService: AuthService,
              private app: AppComponent) { }
MostrarForm = false;
public piezadental: PiezaDentalInterface = {};
public piezadentalf: PiezaDentalInterface = {};
public Padpordiente: PadecimientoporDienteInterface = {
id: '',
NombrePadecimiento: '',
NombrePieza: '',
Imagen: '',
Nomenclatura: '',
Ubicacion: '',
};
public Padpordientef: PadecimientoporDienteInterface = {
id: '',
NombrePadecimiento: '',
NombrePieza: '',
Imagen: '',
Nomenclatura: '',
Ubicacion: '',
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
this.Padpordiente = this.authService.getCurrentPadecimientoadiente();
}
onSearch(): void {
console.log(this.piezadentalf);
this.MostrarForm =  false;
if (!this.piezadentalf.id) {
alert('Pieza No seleccionada');
} else if (this.piezadentalf.id) {
this.dataApi.getPiezaById(this.piezadentalf.id).subscribe((pieza: PiezaDentalInterface) => {
console.log(pieza);
this.Padpordiente.Nomenclatura = pieza.Nomenclatura;
this.Padpordiente.Ubicacion = pieza.Ubicacion;
this.Padpordiente.NombrePieza = pieza.NombrePieza;
if (pieza) {
 this.MostrarForm = true;
} else {
alert('Paciente No registrado');
this.router.navigate(['registerpaciente']);
}
});
}
}
onRegisterPadecimientoADiente() {
this.Padpordiente.Imagen = this.sellersPermitString;
this.authService.updateProcedimientoPorPieza(
  this.Padpordiente.id,
this.Padpordiente.NombrePadecimiento,
this.Padpordiente.NombrePieza,
this.Padpordiente.Imagen,
this.Padpordiente.Nomenclatura,
this.Padpordiente.Ubicacion,
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
