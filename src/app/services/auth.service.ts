
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

import { UserInterface } from '../models/user.interface';
import { PaatientInterface } from '../models/patients.interface';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
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

registerMaterial(name: string, cantidad: string, especiality: string, costo: string, idDoctor: string) {
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

  logoutUser() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');

  }/**/
}
