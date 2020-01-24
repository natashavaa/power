import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }
  
  inventario(): void {
    this.router.navigate(["inventario"]);
  }

  especialidad(): void {
    this.router.navigate(["especialidad"]);
  }
  materiales(): void {
    this.router.navigate(["materiales"]);
  }

  multimedia(): void {
    this.router.navigate(["multimedia"]);
  }
  reportes(): void {
    this.router.navigate(["reportes"]);
  }
}
