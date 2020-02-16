import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registroinsumo',
  templateUrl: './registroinsumo.component.html',
  styleUrls: ['./registroinsumo.component.css']
})
export class RegistroinsumoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancelar() {
    this.router.navigate(['especialidad']);
  }
}
