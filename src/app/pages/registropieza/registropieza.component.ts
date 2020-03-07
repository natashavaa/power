import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DataApiService } from '../../services/data-api.service';
import { PiezaDentalInterface } from '../../models/piezadental.interface';

@Component({
  selector: 'app-registropieza',
  templateUrl: './registropieza.component.html',
  styleUrls: ['./registropieza.component.css']
})
export class RegistropiezaComponent implements OnInit {

  constructor(private router: Router , private dataApi: DataApiService, private authService: AuthService) { }
  private PiezaRe: PiezaDentalInterface = {

    NombrePieza: '',
    Descripcion: '',
    Nomenclatura: '',
    Ubicacion: '',
    Imagen: '',
    Posicion: '',
  };
   file;
  ngOnInit() {
  }
  cancelar() {
    this.router.navigate(['mantenimiento']);
  }
  onRegisterPiezaDental(): void {
      const cadena1 =  this.toBase64(this.file);
      console.log(cadena1);
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
      onFileChanged(event) {
      this.file  = event.target.files[0];
      }
       toBase64 = file => new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = () => resolve(reader.result);
    })
}
