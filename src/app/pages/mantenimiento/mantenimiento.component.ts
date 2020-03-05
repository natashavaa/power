import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }

  agregarpieza(): void {
    this.router.navigate(['registerpieza']);
  }
}

