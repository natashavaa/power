import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultaglobal',
  templateUrl: './consultaglobal.component.html',
  styleUrls: ['./consultaglobal.component.css']
})
export class ConsultaglobalComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }
  
  diaria(): void {
    this.router.navigate(["diaria"]);
  }

  semanal(): void {
    this.router.navigate(["global"]);
  }
  
    
  historia(): void {
    this.router.navigate(["global"]);
  }

  cancelar(): void {
    this.router.navigate(["global"]);
  }
}