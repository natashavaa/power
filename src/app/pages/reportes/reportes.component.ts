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
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import { UserInterface } from '../../models/user.interface';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

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
  public user: UserInterface = {
    id: '',
    name: '',
    dni: '',
    age: 0,
    sex: '',
    mail: '',
    password: '',
    userType: '',
    username: '',
    phone: ''
  };
     usuarioA: string;
     especialidad: string;
  inventario(): void {
    this.router.navigate(['inventario']);
  }

  especialidadC(): void {
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
  doctor(): string {
    this.user = this.auth.getCurrentUser();
    if (Object.is(this.user.username, 'admin')) {
        this.usuarioA = 'Administrador';
        return this.usuarioA;
    } else {
      this.usuarioA = 'Doctor : ' + this.user.name;
      this.especialidad = 'Especialidad : ' +  this.user.userType;
      return  this.usuarioA;

    }
  }


  ngOnInit() {
    this.doctor();
    this.app.mostrar = true;
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
      ).subscribe((materials: MaterialInterface) => { ( this.material = materials); } );
    } else
    if (Object.is(this.tabla, 'Insumos')) {
      this.insumostrue = true;
      this.auth.getAllInstrumentoPorFecha(
        fechaInicio, fechaFinal
      ).subscribe((insumo: InstrumentoInterface) => {   ( this.insumo = insumo); } );
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

    doc.fromHTML(pdfTable.innerHTML, 5, 5, {
      elementHandlers: specialElementHandlers
    });

    doc.save('Reportes.pdf');
  }

  generatePdf() {
    const pdf = new PdfMakeWrapper();
    pdf.styles({
      style1: {
          bold: true
      },
      style2: {
          italics: true
      }
  });
    pdf.pageSize('A4');
    pdf.pageMargins([ 40, 60 ]);
    pdf.header('Consultorio Dental MERIDA');
    pdf.rawContent('Simple content');
    pdf.footer('Numero de Contacto : 0123123');
    pdf.create().open();
   }
   imprimirPdfMateriales() {
     const pdf = new  jsPDF('p', 'mm', 'A4');
     pdf.setFont('helvetica');
     pdf.setFontType('bold');
     pdf.setFontSize(4);
     pdf.fromHTML(document.getElementById('pdfTable'), 1 , 1);
     pdf.save('Reportes-Materiales');
   }

   imprimirPdfInsumos() {
    const pdf = new  jsPDF('p', 'mm', 'A4');
    pdf.setFont('helvetica');
    pdf.setFontType('bold');
    pdf.setFontSize(4);
    pdf.fromHTML(document.getElementById('pdfTableInsumos'), 1 , 1);
    pdf.save('Reportes-Insumos');
  }
}
