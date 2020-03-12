import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicioscdm',
  templateUrl: './servicioscdm.component.html',
  styleUrls: ['./servicioscdm.component.css']
})
export class ServicioscdmComponent implements OnInit {

  constructor(private router: Router,) { }

  agregarservicio(): void {
    this.router.navigate(['registerservicios']);
  }

  ngOnInit() {
  }

}
