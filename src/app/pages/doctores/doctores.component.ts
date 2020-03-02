import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { DataApiService } from '../../services/data-api.service';
import { PaatientInterface } from '../../models/patients.interface';
import { UserInterface } from '../../models/user.interface';
import { AuthService } from '../../services/auth.service';
import { AppComponent } from '../../app.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.component.html',
  styleUrls: ['./doctores.component.css']
})

export class DoctoresComponent implements OnInit {
  public user2: UserInterface = {
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
  constructor(private dataApi: DataApiService, private authService: AuthService, private router: Router, private app: AppComponent) {}

  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  public doctorUser: UserInterface = {
};
private user: UserInterface = {};

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  doctor(): string {
    this.user2 = this.authService.getCurrentUser();
    if (Object.is(this.user2.username, 'admin')) {
        this.usuarioA = 'Administrador';
        return this.usuarioA;
    } else {
      this.usuarioA = 'Doctor : ' + this.user2.name;
      this.especialidad = 'Especialidad : ' +  this.user2.userType;
      return  this.usuarioA;

    }
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.app.mostrar = true;
    this.doctor();
    this.getlistUsers();
  }
  getlistUsers() {
    this.dataApi.getAllUser().subscribe((doctorUser: UserInterface) => ( this.doctorUser = doctorUser));
  }
  darPermisoDoctor(doctorUser: UserInterface) {
    doctorUser.status = 'PERMISO';
    this.authService.updateUserPermiso(
      doctorUser.id,
      doctorUser.name,
      doctorUser.phone,
      doctorUser.password,
      doctorUser.dni,
      doctorUser.age,
      doctorUser.sex,
      doctorUser.mail,
      doctorUser.userType,
      doctorUser.username,
      doctorUser.status
    ).subscribe(user => {
      this.router.navigate(['doctores']);
      this.ngOnInit();
     } );
  }
  quitarPermisoDoctor(doctorUser: UserInterface) {
    doctorUser.status = 'NO PERMISO';
    this.authService.updateUserPermiso(
      doctorUser.id,
      doctorUser.name,
      doctorUser.phone,
      doctorUser.password,
      doctorUser.dni,
      doctorUser.age,
      doctorUser.sex,
      doctorUser.mail,
      doctorUser.userType,
      doctorUser.username,
      doctorUser.status
    ).subscribe(user => {
      this.router.navigate(['doctores']);
      this.ngOnInit();
     } );
  }
  eliminarDoctor(doctorUser: UserInterface) {
}


}
