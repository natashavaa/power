import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { MaterialInterface } from '../../models/material.interface';
import { AuthService } from '../../services/auth.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalComponent } from '../modal/modal.component';


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
  constructor(private router: Router ,
              private dataApi: DataApiService,
              private authService: AuthService,
              public dialog: MatDialog) { }
  private material: MaterialInterface;
  private materialRe: MaterialInterface = {
    id: '',
    name: '',
    especiality: '',
    costo: '',
    cantidad: '',
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

