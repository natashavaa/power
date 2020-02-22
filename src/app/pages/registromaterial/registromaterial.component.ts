import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { MaterialInterface } from '../../models/material.interface';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user.interface';


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
    this.router.navigate(['materiales']);
  }

  onRegisterMaterial(): void {
    this.user2 = this.authService.getCurrentUser();
    this.materialRe.idDoctor = this.user2.id;
    this.authService.registerMaterial(
      this.materialRe.name,
      this.materialRe.cantidad,
      this.materialRe.especiality,
      this.materialRe.costo,
      this.materialRe.idDoctor
    ).subscribe(material => {
      console.log(material);
      this.router.navigate(['materiales']);
     } );
    }
}
