import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReporteInterface } from '../../models/reporte.interface';
import { toDate } from 'date-fns';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})

export class ReportesComponent implements OnInit {
  constructor(private router: Router, private app: AppComponent ) { }
  private reporte: ReporteInterface = {

  };
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

  ngOnInit() {
    this.app.mostrar = true;
  }
  getDateRange(): void {

  }
}
