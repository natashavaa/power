import { NgModule } from '@angular/core';

//Rutas
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';



const app_routes: Routes = [
  {path : '', component : LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'item/:id', component:ItemComponent},
  {path: 'search/:termino', component:SearchComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, { useHash: true })],
  exports: [RouterModule],  
declarations: []
}) 

export class AppRoutingModule { }
