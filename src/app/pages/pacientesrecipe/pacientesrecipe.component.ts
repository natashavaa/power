import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { PaatientInterface } from '../../models/patients.interface';
import { AuthService } from 'src/app/services/auth.service';
import { AppComponent } from '../../app.component';
import { DataApiService } from '../../services/data-api.service';
import { RecipeInterface } from '../../models/recipe.interface';
import * as jsPDF from 'jspdf';
import { PdfMakeWrapper } from 'pdfmake-wrapper/lib/pdfmake-wrapper';
import { DatePipe } from '@angular/common';
import { Txt, Img } from 'pdfmake-wrapper';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

/**
 * @title Table with filtering
 */

@Component({
  selector: 'app-pacientesrecipe',
  templateUrl: './pacientesrecipe.component.html',
  styleUrls: ['./pacientesrecipe.component.css']
})
export class PacientesrecipeComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private dataApi: DataApiService, private authService: AuthService, private app: AppComponent,  public datepipe: DatePipe) { }

  private patient: PaatientInterface;
  private user: PaatientInterface;
  private recipeRe: RecipeInterface = {
    Rp: '',
    Indicaciones: '',
    Firma: '',
    idPatient: '',
    idDoctor: '',
  };
  private recipeRecibido: RecipeInterface = {
    Rp: '',
    Indicaciones: '',
    Firma: '',
    idPatient: '',
    idDoctor: '',
  };
  getlistAllrecipepatients() {
    this.dataApi.getAllRecipePatient(this.patient.id)
    .subscribe((recipes: RecipeInterface) => ( this.recipeRecibido = recipes));
  }
  datos(): void {
    this.router.navigate(['historiaclinica']);
  }
  editarpaciente(): void {
    this.router.navigate(['editarpaciente']);

  }
  imagen(): void {
    this.router.navigate(['imagenes']);
  }

  consulta(): void {
    this.router.navigate(['pacienteconsulta']);
  }
  historia(): void {
    this.router.navigate(['global']);
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
    this.getlistAllrecipepatients();
  }
  onRegisterRecipe(): void {
    const now = new Date();
    this.recipeRe.idPatient = this.patient.id;
    this.recipeRe.idDoctor = this.user.id;
    this.recipeRe.Firma = this.datepipe.transform(now, 'dd-MM-yyyy ');
    this.authService.registerRecipe(
      this.recipeRe.Rp,
      this.recipeRe.Indicaciones,
      this.recipeRe.Firma,
      this.recipeRe.idPatient,
      this.recipeRe.idDoctor,
    ).subscribe(pieza => {
      this.ngOnInit();
      this.router.navigate(['historiaclinica']);
     } );
    }
    async imprimirPdfMateriales(recipeRecibido: RecipeInterface) {
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
     pdf.add( await (await new Img('assets/img/lo.png').alignment('center').build()) );
     pdf.add('    ');
     pdf.add('    ');
     pdf.add(new Txt('Consultorio Dental Merida').alignment('center').italics().end) ;

     pdf.add(new Txt('Doctor:  ' + this.user.name).alignment('center').italics().end) ;
     pdf.add(new Txt('Especialidad:  ' + this.user.userType).alignment('center').italics().end) ;
     pdf.add(new Txt(' RIF-V-09168613-5').alignment('center').italics().end) ;

     // tslint:disable-next-line: max-line-length
     pdf.add(new Txt('____________________________________________________________________________________________').alignment('center').bold().end) ;

     pdf.add('    ');
     pdf.add(new Txt('Recipe').alignment('center').italics().end) ;
     pdf.add('    ');
     pdf.add('    ');
     pdf.add(new Txt('Fecha:   ' + recipeRecibido.Firma).alignment('right').bold().end);

     pdf.add(new Txt('Paciente: ' + this.patient.name).alignment('left').bold().end) ;
     pdf.add('    ');
     pdf.add(new Txt('Cédula: ' + this.patient.dni).alignment('left').bold().end) ;
     pdf.add('    ');

     pdf.add('    ');
     pdf.add('    ');

     pdf.add('    ');
     pdf.add('    ');
     pdf.add('    ');
     pdf.add(new Txt('Rp: ' + recipeRecibido.Rp).alignment('left').bold().end) ;
     pdf.add('    ');
     pdf.add('    ');
     pdf.add('    ');
     pdf.add('    ');
     pdf.add('    ');
     pdf.add('    ');
     pdf.add(new Txt('Indicaciones: ' + recipeRecibido.Indicaciones).alignment('left').bold().end) ;
     pdf.add('    ');
     pdf.add('    ');
     pdf.add('    ');
     pdf.add('    ');
     pdf.add('    ');
     pdf.add('    ');
     pdf.add(new Txt('         ' +  '____________________________').alignment('center').bold().end);
     pdf.add(new Txt('         ' +  '  Sello del Consultorio').alignment('center').bold().end);
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
