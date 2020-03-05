import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-padecimiento',
  templateUrl: './padecimiento.component.html',
  styleUrls: ['./padecimiento.component.css']
})
export class PadecimientoComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  agregarpadecimiento(): void {
    this.router.navigate(['registerpadecimiento']);
  }

}
