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

  constructor(private router: Router, private dataApi: DataApiService, private authService: AuthService, private app: AppComponent) { }

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
    this.recipeRe.idPatient = this.patient.id;
    this.recipeRe.idDoctor = this.user.id;
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
    imprimirPdfMateriales() {
     const pdf = new PdfMakeWrapper();
     pdf.styles({
      style1: {
          bold: true
      },
      style2: {
          italics: true
      }
  });
     pdf.pageMargins([ 100, 100 ]);
     pdf.header('Consultorio Dental Merida');
     // tslint:disable-next-line: max-line-length
     pdf.footer('Email: consultoriodentalmerida@gmail.com Av Dalla Costa Edificio Almary Local 1-B San Felix - Estado Bolivar Pide tu cita al 0286-9314977.');
     pdf.create().download();
    }
}
