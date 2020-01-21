import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {



  constructor(private router: Router) { }


  datos(): void {
    this.router.navigate(["historiaclinica"]);
  }
  
  imagen(): void {
    this.router.navigate(["imagenes"]);
  }


  ngOnInit() {

  }

}
