import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router ) { }

  ngOnInit() {
  }
  
  diaria(): void {
    this.router.navigate(["diaria"]);
  }

  global(): void {
    this.router.navigate(["global"]);
  }
  
  
}