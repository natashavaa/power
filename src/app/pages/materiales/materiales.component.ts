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

  inventario(): void {
    this.router.navigate(['inventario']);
  }

  especialidad(): void {
    this.router.navigate(['especialidad']);
  }
  materiales(): void {
    this.router.navigate(['materiales']);
  }

  multimedia(): void {
    this.router.navigate(['multimedia']);
  }
  reportes(): void {
    this.router.navigate(['reportes']);
  }
  editarpaciente(): void {
    this.router.navigate(['editarpaciente']);

  }
  historia(): void {
    this.router.navigate(['global']);
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
