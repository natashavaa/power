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


const app_routes: Routes = [
  {path: '', component : LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'item/:id', component: ItemComponent},
  {path: 'search/:termino', component: SearchComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component : LoginComponent},
  {path: 'pacientes', component : PacientesComponent},
  {path: 'historiaclinica', component : HistoriaComponent},
  {path: 'imagenes', component: ImagenesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, { useHash: true }), ReactiveFormsModule],
  exports: [RouterModule],  
declarations: []
}) 

export class AppRoutingModule { }
