import { Component, OnInit } from '@angular/core';
import { IniciosService } from 'src/app/services/inicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pantallahome',
  templateUrl: './pantallahome.component.html',
  styleUrls: ['./pantallahome.component.css']
})
export class PantallahomeComponent implements OnInit {

  constructor(public inicioService: IniciosService, private router: Router) {



  }

  ngOnInit() {
  }

  pacientes(): void {
    this.router.navigate(["pacientes"]);

  }
}

