import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { MaterialInterface } from '../../models/material.interface';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-registromaterial',
  templateUrl: './registromaterial.component.html',
  styleUrls: ['./registromaterial.component.css']
})


export class RegistromaterialComponent implements OnInit {

  constructor(private router: Router , private dataApi: DataApiService,private authService: AuthService) { }
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

  agregarmaterial(): void {
    this.router.navigate(['registermaterial']);
  }

  getlistMaterial() {
    this.dataApi.getAllMAterial().subscribe((materials: MaterialInterface) => ( this.material = materials));
    console.log(this.material);
    console.log('lista material recibida');
  }
  cancelar() {

  }

  onRegisterMaterial(): void {
    this.authService.registerMaterial(
      this.materialRe.name,
      this.materialRe.cantidad,
      this.materialRe.especiality,
    ).subscribe(patient => {
      console.log(patient);
     } );
    }
}
