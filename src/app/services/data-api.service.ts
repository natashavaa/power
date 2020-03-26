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
  getPatientsByDoctor(name: string) {
    const urlApi = `http://localhost:3000/patient/doctor${name}`;
    return this.http.get(urlApi);
  }
  getSeguimientoByOdontograma(id) {
    const urlApi = `http://localhost:3000/seguimientoadiente/odontograma/${id}`;
    return this.http.get(urlApi);
  }
  getSeguimientoByOdontogramatodoslosdientes(id) {
    const urlApi = `http://localhost:3000/seguimientodetalletodos/odontograma/${id}`;
    return this.http.get(urlApi);
  }
  getAllRecipePatient(id: string) {
    const urlApi = `http://localhost:3000/recipe/patientrecipe${id}`;
    return this.http.get(urlApi);
  }
  getAllPresupustoPatient(id: string) {
    const urlApi = `http://localhost:3000/presupuesto/patientpresupuesto${id}`;
    return this.http.get(urlApi);
  }
  getAllInformePatient(id: string) {
    const urlApi = `http://localhost:3000/informemedico/patientinforme${id}`;
    return this.http.get(urlApi);
  }
  getAllconsultas() {
    const urlApi = 'http://localhost:3000/consulta' ;
    return this.http.get(urlApi);
  }
  getAllconsultasByDoctor(doctor: string) {
    const urlApi = `http://localhost:3000/consulta/doctor${doctor}` ;
    return this.http.get(urlApi);
  }
  getAllconsultasBypatient(id) {
    const urlApi = `http://localhost:3000/consulta/patient${id}`;
    return this.http.get(urlApi);
  }
  getAllEvolutionBypatient(id) {
    const urlApi = `http://localhost:3000/evolution/patient${id}`;
    return this.http.get(urlApi);
  }
  getAllHistorialBypatient(id) {
    const urlApi = `http://localhost:3000/historialclinico/patient${id}`;
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
  getAllUserConPermiso() {
    const urlApi = 'http://localhost:3000/users/doctorPermiso' ;
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
   getPiezaById(id: string) {
    const urlApi = `http://localhost:3000/piezadental/pieza${id}` ;
    return (this.patient = this.http.get(urlApi));
   }
   getUserByDni(dni: string) {
    const urlApi = `http://localhost:3000/users/dni/${dni}` ;
    return (this.patient = this.http.get(urlApi));
   }
   getAllMAterial() {
    const urlApi = 'http://localhost:3000/material' ;
    return this.http.get(urlApi);
  }
  getMAterialByName(nombre: string) {
    const urlApi = `http://localhost:3000/material/${nombre}` ;
    return this.http.get(urlApi);
  }
  getInstrumentosByName(nombre: string) {
    const urlApi = `http://localhost:3000/instrumento/${nombre}` ;
    return this.http.get(urlApi);
  }
  getAllPadecimientoPorPieza() {
    const urlApi = 'http://localhost:3000/padecimientoporPieza' ;
    return this.http.get(urlApi);
  }
  getAllPiezasDentales() {
    const urlApi = 'http://localhost:3000/piezadental' ;
    return this.http.get(urlApi);
  }
  getAllProcedimientosTodoslosdientes() {
    const urlApi = 'http://localhost:3000/procedimientoapadecimiento/todoslosdientes' ;
    return this.http.get(urlApi);
  }
  getAllodontogramasbypatient(id) {
    const urlApi = `http://localhost:3000/odontograma/patient${id}` ;
    return this.http.get(urlApi);
  }
  getAllodontogramastodoslosdientesbypatient(id) {
    const urlApi = `http://localhost:3000/seguimientotodosdientes/patientseguimiento${id}` ;
    return this.http.get(urlApi);
  }
  getAllodontogramasdeOrtodoncia(id) {
    const urlApi = `http://localhost:3000/ortodoncia/patient/ortodoncia/${id}` ;
    return this.http.get(urlApi);
  }
  getAllprocedimientopornombre(nombre) {
    const urlApi = `http://localhost:3000/procedimientoapadecimiento/nombreprocedimiento/${nombre}` ;
    return this.http.get(urlApi);
  }
  getAllPadecimientosxpiezaporNomeclatura(nom: string) {
    const urlApi = `http://localhost:3000/padecimientoporPieza/nomeclatura/${nom}` ;
    return this.http.get(urlApi);
  }
  getAllServicios() {
    const urlApi = 'http://localhost:3000/servicios' ;
    return this.http.get(urlApi);
  }
  getAllProcedimientos() {
    const urlApi = 'http://localhost:3000/procedimiento' ;
    return this.http.get(urlApi);
  }
  getAllProcedimientosaPadecimientos() {
    const urlApi = 'http://localhost:3000/procedimientoapadecimiento' ;
    return this.http.get(urlApi);
  }
  getAllProcedimientosaUNpadecimiento(padecimiento) {
    const urlApi = `http://localhost:3000/procedimientoapadecimiento/procedimiento/${padecimiento}` ;
    return this.http.get(urlApi);
  }
  getAllPadecimientos() {
    const urlApi = 'http://localhost:3000/padecimiento' ;
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
