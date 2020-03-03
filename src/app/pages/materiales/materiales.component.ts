import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { MaterialInterface } from '../../models/material.interface';
import { AuthService } from '../../services/auth.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { AppComponent } from '../../app.component';
import { UserInterface } from '../../models/user.interface';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent implements OnInit {
  animal: string;
  name: string;
CantUsar: number;
hay = true;
diferencia: number;
speciality: string;
todastrue: boolean;
ortodonciatrue: boolean;
odontologiatrue: boolean;
  constructor(private router: Router ,
              private dataApi: DataApiService,
              private authService: AuthService,
              public dialog: MatDialog , private app: AppComponent) { }
  private material: MaterialInterface;
  private materialRe: MaterialInterface = {
    id: '',
    name: '',
    especiality: '',
    costo: '',
    cantidad: 0,
  };
  public user: UserInterface = {
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
     usuarioA: string;
     especialidad: string;
  openDialog(material: MaterialInterface): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      height: '250px',
      data: {material}
    });


    dialogRef.afterClosed().subscribe(result => {
      this.material = result;

        });
  }
  doctor(): string {
    this.user = this.authService.getCurrentUser();
    if (Object.is(this.user.username, 'admin')) {
        this.usuarioA = 'Administrador';
        return this.usuarioA;
    } else {
      this.usuarioA = 'Doctor : ' + this.user.name;
      this.especialidad = 'Especialidad : ' +  this.user.userType;
      return  this.usuarioA;

    }
  }
  ngOnInit() {
    this.app.mostrar = true;
    this.todastrue = true;
    this.odontologiatrue = false;
    this.ortodonciatrue = false;
    this.doctor();
  }
  OnInput(CantUsar: number) {
    this.CantUsar = CantUsar;
    }
    eliminarMaterial(material: MaterialInterface): void {
        this.authService.deleteMaterial(material.id).subscribe(data => {

          delete this.CantUsar;
          this.speciality = 'Todas';
          this.getMAterialSpeciality();
          this.ngOnInit();
         } );
      }
  usarMaterial(material: MaterialInterface): void {
    if ( material.cantidad > 0) {
        material.cantidad =  material.cantidad - 1;
        material.usados = material.usados + 1;
        this.authService.updateMaterial(
          material.id,
          material.name,
          material.cantidad,
          material.especiality,
          material.costo,
          material.idDoctor,
          material.estadoDisp,
          material.usados
        ).subscribe(materialw => {
          delete this.CantUsar;
          this.ngOnInit();
         } );
    } else {
        this.hay = false;
        material.estadoDisp = 'No Disponible';
        this.authService.updateMaterial(
          material.id,
          material.name,
          material.cantidad,
          material.especiality,
          material.costo,
          material.idDoctor,
          material.estadoDisp,
          material.usados
        ).subscribe(materialw => {
          delete this.CantUsar;
          this.ngOnInit();
         } );
        alert('Material insuficiente');
    }
  }
  especialidadC(): void {
    this.router.navigate(['especialidad']);
  }
  materiales(): void {
    this.router.navigate(['materiales']);
  }
  agregarmaterial(): void {
   this.router.navigate(['registermaterial']);
  }

  getlistAllMaterial() {
    this.dataApi.getAllMAterial().subscribe((materials: MaterialInterface) => ( this.material = materials));
  }
  getlistMaterialOdontologia() {
    this.dataApi.getAllMAterialOdontologia().subscribe((materials: MaterialInterface) => ( this.material = materials));
  }
  getlistMaterialOrtodoncia() {
    this.dataApi.getAllMAterialOrtodoncia().subscribe((materials: MaterialInterface) => ( this.material = materials));
  }

  getMAterialSpeciality(): void {
    if ( Object.is(this.speciality, 'Todas')) {
      this.getlistAllMaterial();
    } else if ( Object.is(this.speciality, 'Odontologia')) {
      this.getlistMaterialOdontologia();
    } else if (Object.is(this.speciality, 'Ortodoncia')) {
      this.getlistMaterialOrtodoncia();

    }
    this.ngOnInit();
  }
  getMAterialSpecialityOninit(): void {
    if ( Object.is(this.speciality, 'Todas')) {
      this.getlistAllMaterial();
    } else if ( Object.is(this.speciality, 'Odontologia')) {
      this.getlistMaterialOdontologia();
    } else if (Object.is(this.speciality, 'Ortodoncia')) {
      this.getlistMaterialOrtodoncia();

    }
    this.ngOnInit();
  }

}

