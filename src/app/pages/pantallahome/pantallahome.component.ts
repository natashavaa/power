import { Component, OnInit } from '@angular/core';
import { IniciosService } from 'src/app/services/inicios.service';
import { Router, Data } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pantallahome',
  templateUrl: './pantallahome.component.html',
  styleUrls: ['./pantallahome.component.css']
})
export class PantallahomeComponent implements OnInit {
patients: Observable<any>;
patient: Observable<any>;

  constructor(public inicioService: IniciosService, private router: Router) {



  }

  ngOnInit() {
  }



  getPatientById(id: string) {
    const urlApi = '';
   }

  pacientes(): void {
    this.router.navigate(['pacientes']);

  }
}

