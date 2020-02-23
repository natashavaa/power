import { Component, OnInit } from '@angular/core';
import { IniciosService } from 'src/app/services/inicios.service';
import { Router, Data } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { Observable } from 'rxjs';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-pantallahome',
  templateUrl: './pantallahome.component.html',
  styleUrls: ['./pantallahome.component.css']
})
export class PantallahomeComponent implements OnInit {
patients: Observable<any>;
patient: Observable<any>;

  constructor(public inicioService: IniciosService, private router: Router, private app: AppComponent) {



  }

  ngOnInit() {
    this.app.mostrar = true;
  }



  getPatientById(id: string) {
    const urlApi = '';
   }

  pacientes(): void {
    this.router.navigate(['pacientes']);

  }
}

