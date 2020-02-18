import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { InstrumentoInterface } from '../../models/instrumento.interface';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class EspecialidadesComponent implements OnInit {

  constructor(private router: Router, private dataApi: DataApiService ) { }
  private instrumento: InstrumentoInterface;
  private instrumentoRe: InstrumentoInterface = {
    id: '',
    name: '',
    especiality: '',
    costo: '',
    cantidad: '',
  };
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

}
