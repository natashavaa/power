
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

import { UserInterface } from '../models/user.interface';
import { PaatientInterface } from '../models/patients.interface';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { MaterialInterface } from '../models/material.interface';
import { InstrumentoInterface } from '../models/instrumento.interface';
import { ReporteInterface } from '../models/reporte.interface';
import { ConsultaInterface } from '../models/consulta.interface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router , private htttp: HttpClient) {}
  headers: HttpHeaders = new HttpHeaders({
   'Content-Type': 'application/json'
  });

registerUser(name: string, phone: string, password: string, dni: string,
             age: number, sex: string, email: string,
             userType: string, username: string) {
    const urlApi = 'http://localhost:3000/users';
    return this.htttp
      .post<UserInterface>(
        urlApi,
        {
          // tslint:disable-next-line: object-literal-shorthand
          name: name,
          // tslint:disable-next-line: object-literal-shorthand
          dni: dni,
          // tslint:disable-next-line: object-literal-shorthand
          age: age,
          // tslint:disable-next-line: object-literal-shorthand
          sex: sex,
          // tslint:disable-next-line: object-literal-shorthand
          mail: email,
          // tslint:disable-next-line: object-literal-shorthand
         username: username,
          // tslint:disable-next-line: object-literal-shorthand
         password: password,
          // tslint:disable-next-line: object-literal-shorthand
           userType: userType,
          // tslint:disable-next-line: object-literal-shorthand
          phone: phone,
        },
      );
  }
  updateMaterial(id: string, name: string, cantidad: number,
                 especiality: string, costo: string, idDoctor: string,
                 estadoDisp: string, usados: number) {
    const urlApi = 'http://localhost:3000/material/update';
    return this.htttp
    .put<PaatientInterface>(
    urlApi,
    {
      // tslint:disable-next-line: object-literal-shorthand
      id: id,
    // tslint:disable-next-line: object-literal-shorthand
    name: name,
    // tslint:disable-next-line: object-literal-shorthand
    cantidad: cantidad,
    // tslint:disable-next-line: object-literal-shorthand
    especiality: especiality,
    // tslint:disable-next-line: object-literal-shorthand
    costo: costo,
    // tslint:disable-next-line: object-literal-shorthand
    idDoctor: idDoctor,
    // tslint:disable-next-line: object-literal-shorthand
    estadoDisp: estadoDisp,
    // tslint:disable-next-line: object-literal-shorthand
    usados: usados

    },
    );
}
deleteMaterial(id: string) {
      const urlApi = `http://localhost:3000/material/${id}`;
      return this.htttp.delete<PaatientInterface>(urlApi,
      );
      }
deleteInstrumento(id: string) {
        const urlApi = `http://localhost:3000/instrumento/${id}`;
        return this.htttp.delete<PaatientInterface>(urlApi,
        );
        }
registerPatient(name: string, dni: string, age: number, sex: string,
                statusC: string, homeAddress: string, occupation: string, workAddress: string,
                mobile: number, birthplace: string, sentBy: string,
                dentalColor: string, familyNumber: number,
                familyName: string, familyNumberHome: number,
                password: string, username: string, mail: string,
                userType: string, phone: string) {
        const urlApi = 'http://localhost:3000/patient';
        return this.htttp
              .post<PaatientInterface>(
              urlApi,
              {
                // tslint:disable-next-line: object-literal-shorthand
              name: name,
                // tslint:disable-next-line: object-literal-shorthand
              dni: dni,
                // tslint:disable-next-line: object-literal-shorthand
              age: age,
                // tslint:disable-next-line: object-literal-shorthand
              sex: sex,
              // tslint:disable-next-line: object-literal-shorthand
              statusC: statusC,
              // tslint:disable-next-line: object-literal-shorthand
              homeAddress: homeAddress,
               // tslint:disable-next-line: object-literal-shorthand
              occupation: occupation,
               // tslint:disable-next-line: object-literal-shorthand
              workAddress: workAddress,
               // tslint:disable-next-line: object-literal-shorthand
              mobile: mobile,
               // tslint:disable-next-line: object-literal-shorthand
              birthplace: birthplace,
               // tslint:disable-next-line: object-literal-shorthand
              sentBy: sentBy,
               // tslint:disable-next-line: object-literal-shorthand
              dentalColor: dentalColor,
               // tslint:disable-next-line: object-literal-shorthand
              familyNumber: familyNumber,
               // tslint:disable-next-line: object-literal-shorthand
              familyNumberHome: familyNumberHome,
               // tslint:disable-next-line: object-literal-shorthand
              familyName: familyName,
               // tslint:disable-next-line: object-literal-shorthand
              password: password,
               // tslint:disable-next-line: object-literal-shorthand
              username: username,
             // tslint:disable-next-line: object-literal-shorthand
              mail: mail,
               // tslint:disable-next-line: object-literal-shorthand
              userType: userType,
               // tslint:disable-next-line: object-literal-shorthand
              phone: phone,
              },
        );
}

registerConsulta(idDoctor: string, idSpeciality: string, idClinicHistory: string, idPatient: string,
                 namePatient: string, dniPatient: string, fechaPlanificada: string, hora: string,
                 motive: string, status: string, consultorioVisitar: string, mes: string) {
      const urlApi = 'http://localhost:3000/consulta';
      return this.htttp
      .post<ConsultaInterface>(urlApi, {
          // tslint:disable-next-line: object-literal-shorthand
          idDoctor: idDoctor,
          // tslint:disable-next-line: object-literal-shorthand
          idSpeciality: idSpeciality,
          // tslint:disable-next-line: object-literal-shorthand
          idClinicHistory: idClinicHistory,
          // tslint:disable-next-line: object-literal-shorthand
          idPatient: idPatient,
        // tslint:disable-next-line: object-literal-shorthand
        namePatient: namePatient,
        // tslint:disable-next-line: object-literal-shorthand
        dniPatient: dniPatient,
         // tslint:disable-next-line: object-literal-shorthand
         fechaPlanificada: fechaPlanificada,
         // tslint:disable-next-line: object-literal-shorthand
         hora: hora,
         // tslint:disable-next-line: object-literal-shorthand
         motive: motive,
          // tslint:disable-next-line: object-literal-shorthand
          status: status,
          // tslint:disable-next-line: object-literal-shorthand
          consultorioVisitar: consultorioVisitar,
            // tslint:disable-next-line: object-literal-shorthand
            mes: mes

      },
      );
}
UpdateConsulta(id: string, idDoctor: string, idSpeciality: string, idClinicHistory: string, idPatient: string,
               namePatient: string, dniPatient: string, fechaPlanificada: string, hora: string,
               motive: string, status: string, consultorioVisitar: string) {
      const urlApi = 'http://localhost:3000/consulta/update';
      return this.htttp
      .put<ConsultaInterface>(urlApi, {
        // tslint:disable-next-line: object-literal-shorthand
        id: id,
      // tslint:disable-next-line: object-literal-shorthand
      idDoctor: idDoctor,
      // tslint:disable-next-line: object-literal-shorthand
      idSpeciality: idSpeciality,
      // tslint:disable-next-line: object-literal-shorthand
      idClinicHistory: idClinicHistory,
      // tslint:disable-next-line: object-literal-shorthand
      idPatient: idPatient,
      // tslint:disable-next-line: object-literal-shorthand
      namePatient: namePatient,
      // tslint:disable-next-line: object-literal-shorthand
      dniPatient: dniPatient,
      // tslint:disable-next-line: object-literal-shorthand
      fechaPlanificada: fechaPlanificada,
      // tslint:disable-next-line: object-literal-shorthand
      hora: hora,
      // tslint:disable-next-line: object-literal-shorthand
      motive: motive,
      // tslint:disable-next-line: object-literal-shorthand
      status: status,
      // tslint:disable-next-line: object-literal-shorthand
      consultorioVisitar: consultorioVisitar,

      },
      );
}
UpdatePatient(id: string, name: string, dni: string, age: number, sex: string,
              statusC: string, homeAddress: string, occupation: string, workAddress: string,
              mobile: number, birthplace: string, sentBy: string,
              dentalColor: string, familyNumber: number,
              familyName: string, familyNumberHome: number,
              password: string, username: string, mail: string,
              userType: string, phone: string) {
      const urlApi = 'http://localhost:3000/patient/update';
      return this.htttp
      .put<PaatientInterface>(
      urlApi,
      {
        // tslint:disable-next-line: object-literal-shorthand
        id: id,
      // tslint:disable-next-line: object-literal-shorthand
      name: name,
      // tslint:disable-next-line: object-literal-shorthand
      dni: dni,
      // tslint:disable-next-line: object-literal-shorthand
      age: age,
      // tslint:disable-next-line: object-literal-shorthand
      sex: sex,
      // tslint:disable-next-line: object-literal-shorthand
      statusC: statusC,
      // tslint:disable-next-line: object-literal-shorthand
      homeAddress: homeAddress,
      // tslint:disable-next-line: object-literal-shorthand
      occupation: occupation,
      // tslint:disable-next-line: object-literal-shorthand
      workAddress: workAddress,
      // tslint:disable-next-line: object-literal-shorthand
      mobile: mobile,
      // tslint:disable-next-line: object-literal-shorthand
      birthplace: birthplace,
      // tslint:disable-next-line: object-literal-shorthand
      sentBy: sentBy,
      // tslint:disable-next-line: object-literal-shorthand
      dentalColor: dentalColor,
      // tslint:disable-next-line: object-literal-shorthand
      familyNumber: familyNumber,
      // tslint:disable-next-line: object-literal-shorthand
      familyNumberHome: familyNumberHome,
      // tslint:disable-next-line: object-literal-shorthand
      familyName: familyName,
      // tslint:disable-next-line: object-literal-shorthand
      password: password,
      // tslint:disable-next-line: object-literal-shorthand
      username: username,
      // tslint:disable-next-line: object-literal-shorthand
      mail: mail,
      // tslint:disable-next-line: object-literal-shorthand
      userType: userType,
      // tslint:disable-next-line: object-literal-shorthand
      phone: phone,
      },
      );
}

registerMaterial(name: string, cantidad: number, especiality: string, costo: string, idDoctor: string) {
    const urlApi = 'http://localhost:3000/material';
    return this.htttp
    .post<PaatientInterface>(
    urlApi,
    {
    // tslint:disable-next-line: object-literal-shorthand
    name: name,
    // tslint:disable-next-line: object-literal-shorthand
    cantidad: cantidad,
    // tslint:disable-next-line: object-literal-shorthand
    especiality: especiality,
    // tslint:disable-next-line: object-literal-shorthand
    costo: costo,
    // tslint:disable-next-line: object-literal-shorthand
    idDoctor: idDoctor,

    },
    );
}
registerInstrumento(name: string, cantidad: number, especiality: string, costo: string, idDoctor: string) {
  const urlApi = 'http://localhost:3000/instrumento';
  return this.htttp
  .post<InstrumentoInterface>(
  urlApi,
  {
  // tslint:disable-next-line: object-literal-shorthand
  name: name,
  // tslint:disable-next-line: object-literal-shorthand
  cantidad: cantidad,
  // tslint:disable-next-line: object-literal-shorthand
  especiality: especiality,
  // tslint:disable-next-line: object-literal-shorthand
  costo: costo,
  // tslint:disable-next-line: object-literal-shorthand
  idDoctor: idDoctor,

  },
  );
}
updateInstrumento(id: string, name: string, cantidad: number, especiality: string,
                  costo: string, idDoctor: string, enUso: number, enLimpieza: number ) {
  const urlApi = 'http://localhost:3000/instrumento/update';
  return this.htttp
  .put<PaatientInterface>(
  urlApi,
  {
    // tslint:disable-next-line: object-literal-shorthand
    id: id,
  // tslint:disable-next-line: object-literal-shorthand
  name: name,
  // tslint:disable-next-line: object-literal-shorthand
  cantidad: cantidad,
  // tslint:disable-next-line: object-literal-shorthand
  especiality: especiality,
  // tslint:disable-next-line: object-literal-shorthand
  costo: costo,
  // tslint:disable-next-line: object-literal-shorthand
  idDoctor: idDoctor,
   // tslint:disable-next-line: object-literal-shorthand
  enUso: enUso,
    // tslint:disable-next-line: object-literal-shorthand
  enLimpieza: enLimpieza,

  },
  );
}
  updateUser(id: string, name: string, phone: string, password: string, dni: string,
             age: number, sex: string, email: string,
             userType: string, username: string) {
        const urlApi = 'http://localhost:3000/users/update';
        return this.htttp
        .put<UserInterface>(
        urlApi,
        {
          // tslint:disable-next-line: object-literal-shorthand
          id: id,
        // tslint:disable-next-line: object-literal-shorthand
        name: name,
        // tslint:disable-next-line: object-literal-shorthand
        dni: dni,
        // tslint:disable-next-line: object-literal-shorthand
        age: age,
        // tslint:disable-next-line: object-literal-shorthand
        sex: sex,
        // tslint:disable-next-line: object-literal-shorthand
        mail: email,
        // tslint:disable-next-line: object-literal-shorthand
        username: username,
        // tslint:disable-next-line: object-literal-shorthand
        password: password,
        // tslint:disable-next-line: object-literal-shorthand
        userType: userType,
        // tslint:disable-next-line: object-literal-shorthand
        phone: phone,
        },
        );
}
updateUserPermiso(id: string, name: string, phone: string, password: string, dni: string,
                  age: number, sex: string, email: string,
                  userType: string, username: string, status: string) {
                const urlApi = 'http://localhost:3000/users/permiso';
                return this.htttp
              .put<UserInterface>(
              urlApi,
              {
              // tslint:disable-next-line: object-literal-shorthand
              id: id,
              // tslint:disable-next-line: object-literal-shorthand
              name: name,
              // tslint:disable-next-line: object-literal-shorthand
              dni: dni,
              // tslint:disable-next-line: object-literal-shorthand
              age: age,
              // tslint:disable-next-line: object-literal-shorthand
              sex: sex,
              // tslint:disable-next-line: object-literal-shorthand
              mail: email,
              // tslint:disable-next-line: object-literal-shorthand
              username: username,
              // tslint:disable-next-line: object-literal-shorthand
              password: password,
              // tslint:disable-next-line: object-literal-shorthand
              userType: userType,
              // tslint:disable-next-line: object-literal-shorthand
              phone: phone,
              // tslint:disable-next-line: object-literal-shorthand
              status: status
              },
              );
}
getAllMAterialPorFecha(fecha1: string , fecha2: string) {
  const urlApi = 'http://localhost:3000/material/fecha' ;
  return this.htttp.post<MaterialInterface>(urlApi,
     {
     // tslint:disable-next-line: object-literal-shorthand
     fecha1: fecha1,
      // tslint:disable-next-line: object-literal-shorthand
      fecha2: fecha2
    });
}
getAllInstrumentoPorFecha(fecha1: string , fecha2: string) {
  const urlApi = 'http://localhost:3000/instrumento/fecha' ;
  return this.htttp.post<InstrumentoInterface>(urlApi,
     {
     // tslint:disable-next-line: object-literal-shorthand
     fecha1: fecha1,
      // tslint:disable-next-line: object-literal-shorthand
      fecha2: fecha2
    });
}

loginuser(username: string, password: string): Observable<any> {
    const urlApi = 'http://localhost:3000/users/login';
    return this.htttp
      .post<UserInterface>(
        urlApi,
        { username, password },
      );
  }/**/

  setUser(user: UserInterface): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem('currentUser', user_string);
  }
  setMaterial(material: MaterialInterface): void {
    let materialString = JSON.stringify(material);
    localStorage.setItem('currentMaterial', materialString);
  }
  setPatient(patient: PaatientInterface): void {
    const patientString = JSON.stringify(patient);
    localStorage.setItem('currentPatient', patientString);
  }

  setToken(token): void {
    localStorage.setItem('accessToken', token);
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

  getCurrentUser(): UserInterface {
    const userString = localStorage.getItem('currentUser');
    if (!isNullOrUndefined(userString)) {
      let user: UserInterface = JSON.parse(userString);
      return user;
    } else {
      return null;
    }
  }
  getCurrentPatient(): PaatientInterface {
    const patientString = localStorage.getItem('currentPatient');
    if (!isNullOrUndefined(patientString)) {
      let patient: PaatientInterface = JSON.parse(patientString);
      return patient;
    } else {
      return null;
    }
  }
  getCurrentMaterial(): MaterialInterface {
    const materialString = localStorage.getItem('currentMaterial');
    if (!isNullOrUndefined(materialString)) {
      let material: PaatientInterface = JSON.parse(materialString);
      return material;
    } else {
      return null;
    }
  }

  logoutUser() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');

  }/**/
}
