import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { PaatientInterface } from '../../models/patients.interface';
import { DataApiService } from '../../services/data-api.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent {

  constructor(private router: Router, private dataApi: DataApiService) {

  }

  private patient: PaatientInterface;

  pacientes(): void {
    this.router.navigate(['registerpaciente']);

  }

  cancelar(): void {
    this.router.navigate(['home']);

  }
  ngOnInit() {
    this.getlistPatients();
}
getlistPatients() {
  this.dataApi.getAllPatints().subscribe((patients: PaatientInterface) => ( this.patient = patients));
  console.log(this.patient);
}
}
