import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { toDate } from 'date-fns';
import { AppComponent } from '../../app.component';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { formatDate, DatePipe } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { MaterialInterface } from '../../models/material.interface';
import { InstrumentoInterface } from '../../models/instrumento.interface';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})

export class ReportesComponent implements OnInit {
  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;

  constructor(private router: Router, private app: AppComponent , public datepipe: DatePipe, private auth: AuthService) { }
  public startDate: Date;
  public endDate: Date;
  private material: MaterialInterface;
  materialestrue: boolean;
  insumostrue: boolean;
  private insumo: InstrumentoInterface;
  tabla: string;
  events: string[] = [];
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
    this.materialestrue = false;
    this.insumostrue = false;
  }

  onSearch(): void {
    this.materialestrue = false;
    this.insumostrue = false;
    const fechaInicio = this.datepipe.transform(this.startDate, 'yyyy-MM-dd h:mm:ss.ssssss');
    const fechaFinal = this.datepipe.transform(this.endDate, 'yyyy-MM-dd h:mm:ss.ssssss');
    if (Object.is(this.tabla, 'Materiales') ) {
      this.materialestrue = true;
      this.auth.getAllMAterialPorFecha(
        fechaInicio, fechaFinal
      ).subscribe((materials: MaterialInterface) => {   console.log(materials); ( this.material = materials); } );
    } else
    if (Object.is(this.tabla, 'Insumos')) {
      this.insumostrue = true;
      this.auth.getAllInstrumentoPorFecha(
        fechaInicio, fechaFinal
      ).subscribe((insumo: InstrumentoInterface) => {   console.log(insumo); ( this.insumo = insumo); } );
    }


  }

  public downloadAsPDF() {
    const doc = new jsPDF();

    const specialElementHandlers = {
      '#editor'(element, renderer) {
        return true;
      }
    };

    const pdfTable = this.pdfTable.nativeElement;

    doc.fromHTML(pdfTable.innerHTML, 15, 15, {
      elementHandlers: specialElementHandlers
    });

    doc.save('tableToPdf.pdf');
  }
}
