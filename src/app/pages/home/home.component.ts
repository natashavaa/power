import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public productosService: ProductosService, private router: Router) {

   }

  ngOnInit() {
  }

  pacientes(): void {
      this.router.navigate(['registerpaciente']);
  }
}
