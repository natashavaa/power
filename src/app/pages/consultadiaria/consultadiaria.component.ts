import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultadiaria',
  templateUrl: './consultadiaria.component.html',
  styleUrls: ['./consultadiaria.component.css']
})
export class ConsultadiariaComponent implements OnInit {

  anio: number = new Date().getFullYear();
  dia: number = new Date().getDay();
  numero: number = new Date().getDate();
  mes: number = new Date().getMonth();

constructor() { }

ngOnInit() {
}

}
