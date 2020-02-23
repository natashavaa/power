import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { MaterialInterface } from '../../models/material.interface';
import { AuthService } from '../../services/auth.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { AppComponent } from '../../app.component';


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
  ngOnInit() {
    this.app.mostrar = true;
    this.getlistMaterial();
  }
  OnInput(CantUsar: number) {
    this.CantUsar = CantUsar;
    }
    eliminarMaterial(material: MaterialInterface): void {
        this.authService.deleteMaterial(material.id).subscribe(data => {

          delete this.CantUsar;
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

  }


}

