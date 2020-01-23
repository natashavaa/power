import { NgModule } from '@angular/core';

//Rutas
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

//Componentes
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
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


const app_routes: Routes = [
  {path: '', component : LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'item/:id', component: ItemComponent},  
  {path: 'pacienteseguimiento', component: PacienteseguimientoComponent},
  {path: 'search/:termino', component: SearchComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'pacienteodontograma', component: PacienteodontogramaComponent},
  {path: 'login', component : LoginComponent},
  {path: 'pacientepadecimiento', component: PacientepadecimientoComponent},
  {path: 'pacientes', component : PacientesComponent},
  {path: 'pacienteprocedimiento', component: PacienteprocedimientoComponent},
  {path: 'consultas', component: ConsultadiariaComponent}, 
  {path: 'historiaclinica', component : HistoriaComponent},
  {path: 'pacienteinformacion', component: PacienteinformacionComponent},
  {path: 'imagenes', component: ImagenesComponent},
  {path: 'pacienteconsulta', component: PacienteconsultaComponent},  
  {path: 'todoslosdientes', component: OdontogramatodoslosdientesComponent},  
  {path: '**', pathMatch: 'full', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, { useHash: true }), ReactiveFormsModule],
  exports: [RouterModule],  
declarations: []
}) 

export class AppRoutingModule { }
