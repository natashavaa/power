import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { HeaderComponent } from '../shared/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { PaatientInterface } from '../models/patients.interface';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  patient: Observable<any>;
  constructor( private http: HttpClient) {}

  getAllPatints() {
    const urlApi = 'http://localhost:3000/patient' ;
    return this.http.get(urlApi);
  }
  getAllconsultas() {
    const urlApi = 'http://localhost:3000/consulta' ;
    return this.http.get(urlApi);
  }
  getAllconsultasBypatient(id) {
    const urlApi = `http://localhost:3000/consulta/patient${id}`;
    return this.http.get(urlApi);
  }
  getAllconsultasHoy() {
    const urlApi = 'http://localhost:3000/consulta/hoy' ;
    return this.http.get(urlApi);
  }
  getAllconsultasMes() {
    const urlApi = 'http://localhost:3000/consulta/mes' ;
    return this.http.get(urlApi);
  }
  getAllUser() {
    const urlApi = 'http://localhost:3000/users' ;
    return this.http.get(urlApi);
  }
    getPatientById(id: string) {
    const urlApi = 'http://localhost:3000/patient/$id' ;
    return (this.patient = this.http.get(urlApi));
   }
   getPatientByDni(dni: string) {
    const urlApi = `http://localhost:3000/patient/${dni}` ;
    return (this.patient = this.http.get(urlApi));
   }
   getAllMAterial() {
    const urlApi = 'http://localhost:3000/material' ;
    return this.http.get(urlApi);
  }
  getAllMAterialOrtodoncia() {
    const urlApi = 'http://localhost:3000/material/ortodoncia' ;
    return this.http.get(urlApi);
  }
  getAllMAterialOdontologia() {
    const urlApi = 'http://localhost:3000/material/odontologia' ;
    return this.http.get(urlApi);
  }

   getAllIntrumentos() {
    const urlApi = 'http://localhost:3000/instrumento' ;
    return this.http.get(urlApi);
  }
  getAllIntrumentosOrtodoncia() {
    const urlApi = 'http://localhost:3000/instrumento/ortodoncia' ;
    return this.http.get(urlApi);
  }
  getAllIntrumentosOdontologia() {
    const urlApi = 'http://localhost:3000/instrumento/odontologia' ;
    return this.http.get(urlApi);
  }
}
