import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  imagen() : void {
    this.router.navigate(["imagenes"]);
  }

  datos() : void {
    this.router.navigate(["historiaclinica"]);
  }
}
