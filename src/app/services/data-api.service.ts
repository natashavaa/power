import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { HeaderComponent } from '../shared/header/header.component';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor( private http: HttpClient) {}

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'});
  getAllPatints() {
    const urlApi = 'http://localhost:3000/patient' ;
    return this.http.get(urlApi);
  }
}
