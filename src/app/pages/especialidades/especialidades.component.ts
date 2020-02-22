import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { InstrumentoInterface } from '../../models/instrumento.interface';
import { AuthService } from '../../services/auth.service';
import { MaterialInterface } from '../../models/material.interface';
@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class EspecialidadesComponent implements OnInit {

  constructor(private router: Router,  private authService: AuthService, private dataApi: DataApiService ) { }
  private instrumento: InstrumentoInterface;
  private instrumentoRe: InstrumentoInterface = {
    id: '',
    name: '',
    especiality: '',
    costo: '',
    cantidad: 0,
    enLimpieza: 0,
    enUso: 0,

  };
  cargando: boolean = false;
  ngOnInit() {
    this.getlistInstrumentos();
  }

  especialidad(): void {
    this.router.navigate(['especialidad']);
  }
  materiales(): void {
    this.router.navigate(['materiales']);
  }

  agregarinsumo(): void {
    this.router.navigate(['registerinsumo']);
  }
  getlistInstrumentos() {
    this.dataApi.getAllIntrumentos().subscribe((Instrumentos: InstrumentoInterface) => ( this.instrumento = Instrumentos));
    console.log(this.instrumento);
    console.log('lista Instrumento');
  }
  usarInsumo(instrumento: InstrumentoInterface): void {
    if ( instrumento.cantidad > 0) {
      instrumento.cantidad = instrumento.cantidad - 1;
      instrumento.enUso = instrumento.enUso + 1;
      this.authService.updateInstrumento(
        instrumento.id,
        instrumento.name,
        instrumento.cantidad,
        instrumento.especiality,
        instrumento.costo,
        instrumento.idDoctor,
        instrumento.enUso,
        instrumento.enLimpieza
      ).subscribe(materialw => {
        console.log('lista actualizada');
        console.log(materialw);
        this.ngOnInit();
       } );
    } else {
      alert('Cantidad de Insumos insuficientes');
    }

  }
  enUsoInsumos(instrumento: InstrumentoInterface): void {
    if ( instrumento.enUso > 0) {
      instrumento.enUso = instrumento.enUso - 1;
      instrumento.enLimpieza = instrumento.enLimpieza + 1;
      this.authService.updateInstrumento(
        instrumento.id,
        instrumento.name,
        instrumento.cantidad,
        instrumento.especiality,
        instrumento.costo,
        instrumento.idDoctor,
        instrumento.enUso,
        instrumento.enLimpieza
      ).subscribe(materialw => {
        console.log('lista actualizada');
        console.log(materialw);
        this.ngOnInit();
       } );
    } else {
      alert('No esta utilizando este insumo');
    }

  }

  limpiarInsumos(instrumento: InstrumentoInterface): void {
    if ( instrumento.enLimpieza > 0) {
      instrumento.enLimpieza = instrumento.enLimpieza - 1;
      instrumento.cantidad = instrumento.cantidad + 1;
      this.authService.updateInstrumento(
        instrumento.id,
        instrumento.name,
        instrumento.cantidad,
        instrumento.especiality,
        instrumento.costo,
        instrumento.idDoctor,
        instrumento.enUso,
        instrumento.enLimpieza
      ).subscribe(materialw => {
        console.log('lista actualizada');
        console.log(materialw);
        this.ngOnInit();
       } );
    } else {
      alert('Todos los Instrumentos estan limpios');
    }

  }
  eliminarIsumos(instrumento: InstrumentoInterface): void {
    this.authService.deleteInstrumento(instrumento.id).subscribe(data => {
      console.log(data);
      console.log('Instrumento eliminado');
      this.ngOnInit();
     } );
  }

}
