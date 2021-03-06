
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '../materiales/materiales.component';
import { MaterialInterface } from '../../models/material.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MaterialInterface) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    // tslint:disable-next-line: no-unused-expression
    this.data;
  }

}
