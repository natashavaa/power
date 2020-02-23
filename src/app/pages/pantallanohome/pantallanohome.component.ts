import { PacientesComponent } from './../pacientes/pacientes.component';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-pantallanohome',
  templateUrl: './pantallanohome.component.html',
  styleUrls: ['./pantallanohome.component.css']
})


export class PantallanohomeComponent implements OnInit {

  constructor(private app: AppComponent ) { }

  ngOnInit() {
    this.app.mostrar = true;
  }

}
