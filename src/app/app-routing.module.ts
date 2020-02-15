import { NgModule } from '@angular/core';

// Rutas
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Componentes

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { HistoriaComponent} from './pages/historia/historia.component';
import { ImagenesComponent} from './pages/imagenes/imagenes.component';
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



const appRoutes: Routes = [
  {path: '', component : LoginComponent},
  {path: 'pacienteseguimiento', component: PacienteseguimientoComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'pacienteodontograma', component: PacienteodontogramaComponent},
  {path: 'login', component : LoginComponent},
  {path: 'pacientepadecimiento', component: PacientepadecimientoComponent},
  {path: 'registerpaciente', component : RegistropacienteComponent},
  {path: 'pacientes', component : PacientesComponent},
  {path: 'doctores', component : DoctoresComponent},
  {path: 'pacienteprocedimiento', component: PacienteprocedimientoComponent},
  {path: 'diaria', component: ConsultadiariaComponent},
  {path: 'global', component: ConsultaglobalComponent},
  {path: 'especialidad', component: EspecialidadesComponent},
  {path: 'materiales', component: MaterialesComponent},
  {path: 'editarperfil', component : PerfilComponent},
  {path: 'pacienterecipe', component : PacientesrecipeComponent},
  {path: 'reportes', component: ReportesComponent},
  {path: 'historiaclinica', component : HistoriaComponent},
  {path: 'pacienteinformacion', component: PacienteinformacionComponent},
  {path: 'imagenes', component: ImagenesComponent},
  {path: 'pantallahome', component: PantallahomeComponent},
  {path: 'ortodoncia', component: OrtodonciaComponent},
  {path: 'pacienteconsulta', component: PacienteconsultaComponent},
  {path: 'todoslosdientes', component: OdontogramatodoslosdientesComponent},
  {path: 'pantallaNOhome', component: PantallanohomeComponent},
  {path: 'listahistorias', component: ListahistoriasComponent},
  {path: 'recuperacion', component: RecuperacionComponent},
  {path: 'editarpaciente', component: EditarpacienteComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true }), ReactiveFormsModule],
  exports: [RouterModule],
declarations: []
})

export class AppRoutingModule { }
