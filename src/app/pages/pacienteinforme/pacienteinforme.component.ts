import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaatientInterface } from '../../models/patients.interface';
import { AppComponent } from '../../app.component';
import { DataApiService } from '../../services/data-api.service';
import { AuthService } from '../../services/auth.service';
import { InformeMedicoInterface } from '../../models/informemedico.interface';
import { DatePipe } from '@angular/common';
import { UserInterface } from '../../models/user.interface';
import { PdfMakeWrapper } from 'pdfmake-wrapper/lib/pdfmake-wrapper';
import { Txt, Img } from 'pdfmake-wrapper';

@Component({
  selector: 'app-pacienteinforme',
  templateUrl: './pacienteinforme.component.html',
  styleUrls: ['./pacienteinforme.component.css']
})
export class PacienteinformeComponent implements OnInit {

  constructor(private router: Router, public datepipe: DatePipe,
              private dataApi: DataApiService, private authService: AuthService, private app: AppComponent) { }
  private patient: PaatientInterface;
  private user: UserInterface;
  public startDate: Date;
  private informeRe: InformeMedicoInterface = {
    PorPresentar: '',
    DiagnosticoDefinitivo: '',
    Firma: '',
    Certificoqueeldia: '',
    AtendiA: '',
    idPatient: '',
    idDoctor: '',
  };
  private informeRecibido: InformeMedicoInterface = {
    PorPresentar: '',
    DiagnosticoDefinitivo: '',
    Firma: '',
    Certificoqueeldia: '',
    AtendiA: '',
    idPatient: '',
    idDoctor: '',
  };
  onRegisterInforme() {
    const fechaInicio = this.datepipe.transform(this.startDate, 'dd-MM-yyyy');
    this.informeRe.Certificoqueeldia = fechaInicio;
    this.informeRe.idPatient = this.patient.id;
    this.informeRe.idDoctor = this.user.id;
    this.informeRe.AtendiA = this.patient.name;
    this.authService.registerInforme(
      this.informeRe.PorPresentar,
      this.informeRe.DiagnosticoDefinitivo,
      this.informeRe.Firma,
      this.informeRe.Certificoqueeldia,
      this.informeRe.AtendiA,
      this.informeRe.idPatient,
      this.informeRe.idDoctor,
    ).subscribe(user => {
      this.ngOnInit();
      this.router.navigate(['historiaclinica']);
     } );

  }

  getlistAllInformepatients() {
    this.dataApi.getAllInformePatient(this.patient.id)
    .subscribe((informes: InformeMedicoInterface) => ( this.informeRecibido = informes));
  }
  datos(): void {
    this.router.navigate(['historiaclinica']);
  }

  imagen(): void {
    this.router.navigate(['imagenes']);
  }

  consulta(): void {
    this.router.navigate(['pacienteconsulta']);
  }

  procedimiento(): void {
    this.router.navigate(['pacienteprocedimiento']);
  }

  seguimiento(): void {
    this.router.navigate(['pacienteseguimiento']);
  }

  odontograma(): void {
    this.router.navigate(['pacienteodontograma']);
  }

  informacion(): void {
    this.router.navigate(['pacienteinformacion']);
  }

  recipe(): void {
    this.router.navigate(['pacienterecipe']);
  }

  presupuesto(): void {
    this.router.navigate(['pacientepresupuesto']);
  }

  informe(): void {
    this.router.navigate(['pacienteinforme']);
  }

  verservicios(): void {
    this.router.navigate(['verservicios']);
  }

  ngOnInit() {
    this.app.mostrar = true;
    this.patient = this.authService.getCurrentPatient();
    this.user = this.authService.getCurrentUser();
    this.informeRe.AtendiA = this.patient.name;
    this.getlistAllInformepatients();
    }
    async imprimirPdfMateriales(recipeRecibido: InformeMedicoInterface) {
      const pdf = new PdfMakeWrapper();
      pdf.styles({
       style1: {
           bold: true
       },
       style2: {
           italics: true
       }
   });


      pdf.add('    ');
      pdf.add('    ');
      pdf.add(new Txt('Fecha:   ' + recipeRecibido.Certificoqueeldia).alignment('right').italics().end);
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      pdf.add(new Txt('Aqui va el logo').alignment('center').italics().end) ;
      pdf.add('    ');
      pdf.add(new Txt('Consultorio Dental Merida').alignment('center').italics().end) ;
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      pdf.add(new Txt('Informe Médico').alignment('center').bold().end) ;
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      // tslint:disable-next-line: max-line-length
      pdf.add(new Txt(' Yo  ' + this.user.name + '  Doctor encargado ' + ''  + ' certico que el dia ' + recipeRecibido.Certificoqueeldia + '   atendi a  ' + this.patient.name + '  portador de la CI nro: ' + this.patient.dni + '   por presentar: ' + recipeRecibido.PorPresentar + '  Recibiendo como Diagnostico:  ' +  recipeRecibido.DiagnosticoDefinitivo + ' ').alignment('center').italics().end) ;
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      pdf.add(new Txt('___________________'  + '         ' +  '____________________________').alignment('center').bold().end);
      pdf.add(new Txt('    Firma Doctor   '  + '         ' +  '  Sello del Consultorio').alignment('center').bold().end);
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');


      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      pdf.add('    ');
      // tslint:disable-next-line: max-line-length
      pdf.add(new Txt('Email: consultoriodentalmerida@gmail.com Av Dalla Costa Edificio Almary Local 1-B San Felix - Estado Bolivar Pide tu cita al 0286-9314977.').alignment('center').italics().end);
      pdf.pageSize('A4');

      pdf.create().download();
     }
}
