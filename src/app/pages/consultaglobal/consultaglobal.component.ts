import {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DataApiService } from '../../services/data-api.service';
import { PaatientInterface } from '../../models/patients.interface';


@Component({
  selector: 'app-consultaglobal',
  styleUrls: ['./consultaglobal.component.css'],
  templateUrl: './consultaglobal.component.html'
})
export class ConsultaglobalComponent implements OnInit {


  constructor(private router: Router, private  authService: AuthService, private dataApi: DataApiService) {}
    dni: string;
    MostrarForm: boolean;

    private patient: PaatientInterface = {
      dni: '',
    };
    private patientf: PaatientInterface = {
      dni : '',
      name : '',
    };
  ngOnInit() {
  }
  onSearch(): void {
    this.MostrarForm =  false;
    if (!this.patient.dni) {
    alert('Ingrese Cedula para buscar paciente');
   } else if (this.patient.dni) {
    this.dataApi.getPatientByDni(this.patient.dni).subscribe((patients: PaatientInterface) => {
       this.patientf = patients;
       console.log(this.patientf);
       if (this.patientf) {
         this.MostrarForm = true;
       } else {
        alert('Paciente No registrado');
        this.router.navigate(['registerpaciente']);
       }
    });
   }
}
}
