import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { MaterialInterface } from '../../models/material.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent implements OnInit {

  constructor(private router: Router , private dataApi: DataApiService, private authService: AuthService) { }
  private material: MaterialInterface;
  private materialRe: MaterialInterface = {
    id: '',
    name: '',
    especiality: '',
    costo: '',
    cantidad: '',
  };

  ngOnInit() {
    this.getlistMaterial();
  }


  especialidad(): void {
    this.router.navigate(['especialidad']);
  }
  materiales(): void {
    this.router.navigate(['materiales']);
  }


  agregarmaterial(): void {
    this.router.navigate(['registermaterial']);
  }

  getlistMaterial() {
    this.dataApi.getAllMAterial().subscribe((materials: MaterialInterface) => ( this.material = materials));
    console.log(this.material);
    console.log('lista material recibida');
  }


}
