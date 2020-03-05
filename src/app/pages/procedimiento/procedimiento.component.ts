import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-procedimiento',
  templateUrl: './procedimiento.component.html',
  styleUrls: ['./procedimiento.component.css']
})
export class ProcedimientoComponent implements OnInit {

  
  constructor(private router: Router ) { }

  ngOnInit() {
  }

  agregarprocedimiento(): void {
    this.router.navigate(['registerprocedimiento']);
  }

}