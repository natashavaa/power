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
      console.log(result);
        });
  }
  ngOnInit() {
    this.getlistMaterial();
  }//acaaaa
  OnInput(CantUsar: number) {
    this.CantUsar = CantUsar;
    }
    eliminarMaterial(material: MaterialInterface): void {
        this.authService.deleteMaterial(material.id).subscribe(data => {
          console.log(data);
          console.log('material eliminado');
          delete this.CantUsar;
          this.ngOnInit();
         } );
      }
  usarMaterial(material: MaterialInterface, Cantusar: number): void {
    console.log(material);
    console.log(this.CantUsar);
     // tslint:disable-next-line: radix
    if ( this.CantUsar > material.cantidad) {
      alert('cantidad mayor');

    } else {
        material.cantidad =  material.cantidad - this.CantUsar;
        material.estadoDisp = 'No Disponible';
        this.authService.updateMaterial(
          material.id,
          material.name,
          material.cantidad,
          material.especiality,
          material.costo,
          material.idDoctor,
          material.estadoDisp
        ).subscribe(materialw => {
          console.log('lista actualizada');
          console.log(materialw);
          delete this.CantUsar;
          this.ngOnInit();
         } );
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
    console.log(this.material);
    console.log('lista material recibida');
  }


}

