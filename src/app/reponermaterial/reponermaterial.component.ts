import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../services/data-api.service';
import { Router } from '@angular/router';
import { MaterialInterface } from '../models/material.interface';
import { AuthService } from '../services/auth.service';
import { UserInterface } from '../models/user.interface';

@Component({
  selector: 'app-reponermaterial',
  templateUrl: './reponermaterial.component.html',
  styleUrls: ['./reponermaterial.component.css']
})
export class ReponermaterialComponent implements OnInit {

  constructor(private router: Router , private dataApi: DataApiService, private authService: AuthService) { }
  private material: MaterialInterface;
  private materialRe: MaterialInterface = {
    id: '',
    name: '',
    especiality: '',
    costo: '',
    cantidad: 0,
  };
  private materialverf: MaterialInterface = {
    id: '',
    name: '',
    especiality: '',
    costo: '',
    cantidad: 0,
  };
  private user2: UserInterface = {
    id: '',
    name: '',
    dni: '',
    age: 0,
    sex: '',
    mail: '',
    password: '',
    userType: '',
    username: '',
    phone: ''
  };

  ngOnInit() {
    this.getMaterial();
  }
  getMaterial(): void {
    this.materialRe = this.authService.getCurrentMaterial();
    this.materialverf = this.authService.getCurrentMaterial();

  }
  cancelar() {
    this.router.navigate(['materiales']);
  }

  onRegisterMaterial(): void {
    if (this.materialverf.id) {
      this.authService.deleteMaterial(this.materialverf.id).subscribe(material => {
       } );

    }
    this.user2 = this.authService.getCurrentUser();
    this.materialRe.idDoctor = this.user2.id;
    this.authService.registerMaterial(
      this.materialRe.name,
      this.materialRe.cantidad,
      this.materialRe.especiality,
      this.materialRe.costo,
      this.materialRe.idDoctor
    ).subscribe(material => {
      this.router.navigate(['materiales']);
      localStorage.removeItem('currentMaterial');

     } );
    }
}
