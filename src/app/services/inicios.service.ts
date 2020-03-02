import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inicio } from '../interfaces/inicio.interface';

@Injectable({
  providedIn: 'root'
})
export class IniciosService {

  cargando: boolean = true;
  inicios: Inicio[] = [];

  constructor(private http: HttpClient) {

    this.cargarInicios();

  }
  private cargarInicios() {
    this.http.get('https://angular-html-4afb9.firebaseio.com/inicio_idx.json')
      .subscribe((resp: Inicio[]) => {
        this.inicios = resp;
        this.cargando = false;

      });
  }
}
