import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { AuthService } from 'src/app/services/auth.service';
import { AppComponent } from '../../app.component';
import { UserInterface } from '../../models/user.interface';
import { ProcedimientoInterface } from '../../models/procedimiento.interface';
import { ProcedimientoApadecimentoInterface } from '../../models/procedimientoapadecimiento.interface';

@Component({
  selector: 'app-procedimiento',
  templateUrl: './procedimiento.component.html',
  styleUrls: ['./procedimiento.component.css']
})
export class ProcedimientoComponent implements OnInit {
  usuarioA: string;
  especialidad: string;
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
  public procedimiento: ProcedimientoInterface = {
    id: '',
    NombreProcedimiento: '',
    Descripcion: '',
    Estatus: '',
    costo: '',

  };
  public procedimientoaPad: ProcedimientoApadecimentoInterface = {
    id: '',
    NombreProcedimiento: '',
    Descripcion      : '',
    Estatus: '',
    costo: '',
    NombrePadecimiento: '',
    NombrePieza: '',
    Imagen: '',
    materiales: '',
    instrumentos: '',

  };
  constructor(private router: Router,
              private dataApi: DataApiService,
              private auth: AuthService,
              private app: AppComponent ) { }

  ngOnInit() {
    this.getlistAllPiezasDentales();
    this.doctor();
    this.app.mostrar = true;
    this.getlistAllProcedimientosaPadecimientos();
  }
  getlistAllProcedimientosaPadecimientos() {
    // tslint:disable-next-line: max-line-length
    this.dataApi.getAllProcedimientosaPadecimientos().subscribe((procedimientoaPad: ProcedimientoApadecimentoInterface) => ( this.procedimientoaPad = procedimientoaPad));
  }
  doctor(): string {
    this.user = this.auth.getCurrentUser();
    if (Object.is(this.user.username, 'admin')) {
        this.usuarioA = 'Administrador';

        return this.usuarioA;
    } else {
      this.usuarioA = 'Doctor : ' + this.user.name;
      this.especialidad = 'Especialidad : ' +  this.user.userType;
      return  this.usuarioA;

    }
  }
  ReponerMaterialpro(pro: ProcedimientoApadecimentoInterface): void {
    this.auth.setProaPadecimiento(pro);
    this.router.navigate(['modificarprocedimientoapadecimiento']);
     }
  eliminarMaterialpro(pro: ProcedimientoApadecimentoInterface): void {
    this.auth.deleteProcedimientoaPade(pro.id).subscribe(data => {

      this.ngOnInit();
     } );
  }
  ReponerMaterial(pro: ProcedimientoInterface): void {
    this.auth.setPadecimiento(pro);
    this.router.navigate(['modificarprocedimiento']);
     }
  eliminarMaterial(pro: ProcedimientoInterface): void {
    this.auth.deleteProcedimiento(pro.id).subscribe(data => {

      this.ngOnInit();
     } );
  }
  getlistAllPiezasDentales() {
    this.dataApi.getAllProcedimientos().subscribe((procedimiento: ProcedimientoInterface) => ( this.procedimiento = procedimiento));
  }

  agregarprocedimiento(): void {
    this.router.navigate(['registerprocedimiento']);
  }
  agregarprocedimientoaPadecimiento() {
    this.router.navigate(['procedimientoapadecimiento']);
  }
  agregarprocedimientoaPadecimientoad() {
    this.router.navigate(['procedimientoapadecimiento']);
  }
}
