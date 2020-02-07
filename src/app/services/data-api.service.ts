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
    getPatientById(id: string) {
    const urlApi = 'http://localhost:3000/patient/$id' ;
    return (this.patient = this.http.get(urlApi));
   }

}
