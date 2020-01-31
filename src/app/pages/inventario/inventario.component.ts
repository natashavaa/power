import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  constructor(private router: Router) { }


  inventario(): void {
    this.router.navigate(["inventario"]);
  }

  especialidad(): void {
    this.router.navigate(["especialidad"]);
  }

  materiales(): void {
    this.router.navigate(["materiales"]);
  }

  reportes(): void {
    this.router.navigate(["reportes"]);
  }

  ngOnInit() {

  }
}
