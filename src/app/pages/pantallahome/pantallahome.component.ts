import { Component, OnInit } from '@angular/core';
import { IniciosService } from 'src/app/services/inicios.service';
import { Router, Data } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-pantallahome',
  templateUrl: './pantallahome.component.html',
  styleUrls: ['./pantallahome.component.css']
})
export class PantallahomeComponent implements OnInit {

  constructor(public inicioService: IniciosService, private router: Router, private dataApi: DataApiService) {



  }

  ngOnInit() {
    this.getlistPatients();
  }

  getlistPatients() {
    this.dataApi.getAllPatints().subscribe(patients => console.log(patients));
  }

  pacientes(): void {
    this.router.navigate(['pacientes']);

  }
}

