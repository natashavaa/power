import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class EspecialidadesComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  inventario(): void {
    this.router.navigate(['inventario']);
  }

  especialidad(): void {
    this.router.navigate(['especialidad']);
  }
  materiales(): void {
    this.router.navigate(['materiales']);
  }

  multimedia(): void {
    this.router.navigate(['multimedia']);
  }
  reportes(): void {
    this.router.navigate(['reportes']);
  }
  historia(): void {
    this.router.navigate(['especialidad']);
  }
  editarpaciente(): void {
    this.router.navigate(['editarpaciente']);

  }
}
