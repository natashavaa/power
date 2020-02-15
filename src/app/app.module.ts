import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './core/material.module';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';

// Rutas
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';


// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SearchComponent } from './pages/search/search.component';
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
import { InventarioComponent } from './pages/inventario/inventario.component';
import { EspecialidadesComponent } from './pages/especialidades/especialidades.component';
import { MaterialesComponent } from './pages/materiales/materiales.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { PacientesrecipeComponent } from './pages/pacientesrecipe/pacientesrecipe.component';
import { PantallanohomeComponent } from './pages/pantallanohome/pantallanohome.component';

// firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { PerfilComponent } from './pages/perfil/perfil.component';

// calendario

import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// fecha
import {
  MatFormFieldModule,
  MatMenuModule,
  MatCheckboxModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { PantallahomeComponent } from './pages/pantallahome/pantallahome.component';
import { RegistropacienteComponent } from './pages/registropaciente/registropaciente.component';
import { DataApiService } from './services/data-api.service';
import { DoctoresComponent } from './pages/doctores/doctores.component';
import { OrtodonciaComponent } from './pages/ortodoncia/ortodoncia.component';
import { ListahistoriasComponent } from './pages/listahistorias/listahistorias.component';
import { RecuperacionComponent } from './pages/recuperacion/recuperacion.component';
import { EditarpacienteComponent } from './pages/editarpaciente/editarpaciente.component';
import { RegistromaterialComponent } from './pages/registromaterial/registromaterial.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    PacientesComponent,
    HistoriaComponent,
    ImagenesComponent,
    PacienteconsultaComponent,
    PacienteprocedimientoComponent,
    PacienteseguimientoComponent,
    PacienteodontogramaComponent,
    PacientepadecimientoComponent,
    PacienteinformacionComponent,
    OdontogramatodoslosdientesComponent,
    ConsultadiariaComponent,
    ConsultaglobalComponent,
    InventarioComponent,
    EspecialidadesComponent,
    MaterialesComponent,
    ReportesComponent,
    PacientesrecipeComponent,
    PerfilComponent,
    PantallahomeComponent,
    RegistropacienteComponent,
    PantallanohomeComponent,
    DoctoresComponent,
    OrtodonciaComponent,
    ListahistoriasComponent,
    RecuperacionComponent,
    EditarpacienteComponent,
    RegistromaterialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule,
    AngularFireStorageModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    MatExpansionModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    MatPaginatorModule,
    CommonModule,
    NgbModalModule,
    ReactiveFormsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ], 
  providers: [ConsultaglobalComponent, DataApiService,
    {
      provide: StorageBucket, useValue: 'gs://angular-html-4afb9.appspot.com'
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }



