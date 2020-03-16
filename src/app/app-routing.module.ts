import { NgModule } from '@angular/core';

// Rutas
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Componentes

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { PacienteconsultaComponent } from './pages/pacienteconsulta/pacienteconsulta.component';
import { PacienteprocedimientoComponent } from './pages/pacienteprocedimiento/pacienteprocedimiento.component';
import { PacienteseguimientoComponent } from './pages/pacienteseguimiento/pacienteseguimiento.component';
import { PacienteodontogramaComponent } from './pages/pacienteodontograma/pacienteodontograma.component';
import { PacientepadecimientoComponent } from './pages/pacientepadecimiento/pacientepadecimiento.component';
import { PacienteinformacionComponent } from './pages/pacienteinformacion/pacienteinformacion.component';
import { OdontogramatodoslosdientesComponent } from './pages/odontogramatodoslosdientes/odontogramatodoslosdientes.component';
import { ConsultadiariaComponent } from './pages/consultadiaria/consultadiaria.component';
import { ConsultaglobalComponent } from './pages/consultaglobal/consultaglobal.component';
import { EspecialidadesComponent } from './pages/especialidades/especialidades.component';
import { MaterialesComponent } from './pages/materiales/materiales.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { PacientesrecipeComponent } from './pages/pacientesrecipe/pacientesrecipe.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PantallahomeComponent } from './pages/pantallahome/pantallahome.component';
import { RegistropacienteComponent } from './pages/registropaciente/registropaciente.component';
import { PantallanohomeComponent } from './pages/pantallanohome/pantallanohome.component';
import { DoctoresComponent } from './pages/doctores/doctores.component';
import { OrtodonciaComponent } from './pages/ortodoncia/ortodoncia.component';
import { ListahistoriasComponent } from './pages/listahistorias/listahistorias.component';
import { RecuperacionComponent } from './pages/recuperacion/recuperacion.component';
import { EditarpacienteComponent } from './pages/editarpaciente/editarpaciente.component';
import { RegistromaterialComponent } from './pages/registromaterial/registromaterial.component';
import { RegistroinsumoComponent } from './pages/registroinsumo/registroinsumo.component';
import { PantallaNOaccesoComponent } from './pages/pantalla-noacceso/pantalla-noacceso.component';
import { PacientepresupuestoComponent } from './pages/pacientepresupuesto/pacientepresupuesto.component';
import { PacienteinformeComponent } from './pages/pacienteinforme/pacienteinforme.component';
import { MantenimientoComponent } from './pages/mantenimiento/mantenimiento.component';
import { RegistropiezaComponent } from './pages/registropieza/registropieza.component';
import { PadecimientoComponent } from './pages/padecimiento/padecimiento.component';
import { RegistropadecimientoComponent } from './pages/registropadecimiento/registropadecimiento.component';
import { ProcedimientoComponent } from './pages/procedimiento/procedimiento.component';
import { RegistroprocedimientoComponent } from './pages/registroprocedimiento/registroprocedimiento.component';
import { ReponermaterialComponent } from './reponermaterial/reponermaterial.component';
import { PadecimientoADienteComponent } from './pages/padecimiento-adiente/padecimiento-adiente.component';
import { ProcedimientoapadecimientoComponent } from './pages/procedimientoapadecimiento/procedimientoapadecimiento.component';
import { ServicioscdmComponent } from './pages/servicioscdm/servicioscdm.component';
import { RegisterservicioscdmComponent } from './pages/registerservicioscdm/registerservicioscdm.component';
import { OdontogramaserviciosComponent } from './pages/odontogramaservicios/odontogramaservicios.component';
import { ModificarpiezadentalComponent } from './pages/modificarpiezadental/modificarpiezadental.component';
import { ModificarpadecimientoComponent } from './pages/modificarpadecimiento/modificarpadecimiento.component';
import { ModificarprocedimientoComponent } from './pages/modificarprocedimiento/modificarprocedimiento.component';



const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'pacienteseguimiento', component: PacienteseguimientoComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'pacienteodontograma', component: PacienteodontogramaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pacientepadecimiento', component: PacientepadecimientoComponent },
  { path: 'pacientepresupuesto', component: PacientepresupuestoComponent },
  { path: 'pacienteinforme', component: PacienteinformeComponent },
  { path: 'registerpaciente', component: RegistropacienteComponent },
  { path: 'pacientes', component: PacientesComponent },
  { path: 'doctores', component: DoctoresComponent },
  { path: 'pacienteprocedimiento', component: PacienteprocedimientoComponent },
  { path: 'diaria', component: ConsultadiariaComponent },
  { path: 'global', component: ConsultaglobalComponent },
  { path: 'especialidad', component: EspecialidadesComponent },
  { path: 'mantenimiento', component: MantenimientoComponent },
  { path: 'padecimiento', component: PadecimientoComponent },
  { path: 'padecimientoDiente', component: PadecimientoADienteComponent },
  { path: 'procedimiento', component: ProcedimientoComponent },
  { path: 'procedimientoapadecimiento', component: ProcedimientoapadecimientoComponent },
  { path: 'registerpadecimiento', component: RegistropadecimientoComponent },
  { path: 'registerprocedimiento', component: RegistroprocedimientoComponent },
  { path: 'materiales', component: MaterialesComponent },
  { path: 'editarperfil', component: PerfilComponent },
  { path: 'pacienterecipe', component: PacientesrecipeComponent },
  { path: 'registerpieza', component: RegistropiezaComponent },
  { path: 'modificarpieza', component: ModificarpiezadentalComponent },
  { path: 'modificarpadecimiento', component: ModificarpadecimientoComponent },
  { path: 'modificarprocedimiento', component: ModificarprocedimientoComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'historiaclinica', component: HistoriaComponent },
  { path: 'pacienteinformacion', component: PacienteinformacionComponent },
  { path: 'imagenes', component: ImagenesComponent },
  { path: 'pantallahome', component: PantallahomeComponent },
  { path: 'ortodoncia', component: OrtodonciaComponent },
  { path: 'pacienteconsulta', component: PacienteconsultaComponent },
  { path: 'todoslosdientes', component: OdontogramatodoslosdientesComponent },
  { path: 'pantallaNOhome', component: PantallanohomeComponent },
  { path: 'listahistorias', component: ListahistoriasComponent },
  { path: 'accesodenegado', component: PantallaNOaccesoComponent },
  { path: 'recuperacion', component: RecuperacionComponent },
  { path: 'registerinsumo', component: RegistroinsumoComponent },
  { path: 'registermaterial', component: RegistromaterialComponent },
  { path: 'reponermaterial', component: ReponermaterialComponent },
  { path: 'verservicios', component: OdontogramaserviciosComponent},
  { path: 'editarpaciente', component: EditarpacienteComponent },
  { path: 'servicios', component: ServicioscdmComponent },
  { path: 'registerservicios', component: RegisterservicioscdmComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true }), ReactiveFormsModule],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
