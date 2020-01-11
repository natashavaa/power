import { NgModule } from '@angular/core';

//Rutas
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';


const app_routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'item/:id', component:ItemComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, { useHash: true })],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
