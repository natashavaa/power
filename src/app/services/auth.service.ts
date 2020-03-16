
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
import { PiezaDentalInterface } from '../models/piezadental.interface';
import { ProcedimientoInterface } from '../models/procedimiento.interface';
import { PadecimientoInterface } from '../models/padecimiento.interface';
import { PadecimientoporDienteInterface } from '../models/piezaconPadecimiento.interface';
import { ProcedimientoApadecimentoInterface } from '../models/procedimientoapadecimiento.interface';
import { EvolutionInterface } from '../models/evolution.interface';
import { HistotialClinicoInterface } from '../models/historialclinico.interface';
import { RecipeInterface } from '../models/recipe.interface';
import { InformeMedicoInterface } from '../models/informemedico.interface';
import { PadecimientoADienteComponent } from '../pages/padecimiento-adiente/padecimiento-adiente.component';
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
deletePiezaDental(id: string) {
  const urlApi = `http://localhost:3000/piezadental/delete/${id}`;
  return this.htttp.delete<PiezaDentalInterface>(urlApi,
  );
  }
  deletePadecimiento(id: string) {
    const urlApi = `http://localhost:3000/padecimiento/delete/${id}`;
    return this.htttp.delete<PadecimientoInterface>(urlApi,
    );
    }
    deletePadecimientoprodiente(id: string) {
      const urlApi = `http://localhost:3000/padecimientoporPieza/delete/${id}`;
      return this.htttp.delete<PadecimientoADienteComponent>(urlApi,
      );
      }
    deleteProcedimiento(id: string) {
      const urlApi = `http://localhost:3000/procedimiento/delete/${id}`;
      return this.htttp.delete<ProcedimientoInterface>(urlApi,
      );
      }
      deleteProcedimientoaPade(id: string) {
        const urlApi = `http://localhost:3000/procedimientoapadecimiento/delete/${id}`;
        return this.htttp.delete<ProcedimientoApadecimentoInterface>(urlApi,
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
                userType: string, phone: string, registradoPor: string) {
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
               // tslint:disable-next-line: object-literal-shorthand
               registradoPor: registradoPor,
              },
        );
}

registerConsulta(idDoctor: string, idSpeciality: string, idClinicHistory: string, idPatient: string,
                 namePatient: string, dniPatient: string, fechaPlanificada: string, hora: string,
                 motive: string, status: string, consultorioVisitar: string, mes: string,
                 dia: string, atendidoPor: string) {
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
            mes: mes,
            // tslint:disable-next-line: object-literal-shorthand
            dia: dia,
           // tslint:disable-next-line: object-literal-shorthand
           atendidoPor: atendidoPor

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
registerEvolution(idPatient: string, idClinicHistory: string, imagen: string, diagnostic: string) {
  const urlApi = 'http://localhost:3000/evolution';
  return this.htttp
  .post<EvolutionInterface>(
  urlApi,
  {
  // tslint:disable-next-line: object-literal-shorthand
  idPatient: idPatient,
  // tslint:disable-next-line: object-literal-shorthand
  idClinicHistory: idClinicHistory,
  // tslint:disable-next-line: object-literal-shorthand
  imagen: imagen,
  // tslint:disable-next-line: object-literal-shorthand
  diagnostic: diagnostic,

  },
  );
}
registerPiezaDental(NombrePieza: string, Descripcion: string, Nomenclatura: string, Ubicacion: string, Imagen: string, Posicion: string) {
  const urlApi = 'http://localhost:3000/piezadental';
  return this.htttp
  .post<PiezaDentalInterface>(
  urlApi,
  {
  // tslint:disable-next-line: object-literal-shorthand
  NombrePieza: NombrePieza,
  // tslint:disable-next-line: object-literal-shorthand
  Descripcion: Descripcion,
  // tslint:disable-next-line: object-literal-shorthand
  Nomenclatura: Nomenclatura,
  // tslint:disable-next-line: object-literal-shorthand
  Ubicacion: Ubicacion,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen: Imagen,
  // tslint:disable-next-line: object-literal-shorthand
  Posicion: Posicion,

  },
  );
}
updatePiezaDental(id: string, NombrePieza: string, Descripcion: string,
                  Nomenclatura: string, Ubicacion: string, Imagen: string, Posicion: string) {
  const urlApi = 'http://localhost:3000/piezadental/update';
  return this.htttp
  .put<PiezaDentalInterface>(
  urlApi,
  {
     // tslint:disable-next-line: object-literal-shorthand
     id: id,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePieza: NombrePieza,
  // tslint:disable-next-line: object-literal-shorthand
  Descripcion: Descripcion,
  // tslint:disable-next-line: object-literal-shorthand
  Nomenclatura: Nomenclatura,
  // tslint:disable-next-line: object-literal-shorthand
  Ubicacion: Ubicacion,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen: Imagen,
  // tslint:disable-next-line: object-literal-shorthand
  Posicion: Posicion,

  },
  );
}
registerRecipe(Rp: string, Indicaciones: string, Firma: string, idPatient: string, idDoctor: string) {
  const urlApi = 'http://localhost:3000/recipe';
  return this.htttp
  .post<RecipeInterface>(
  urlApi,
  {
  // tslint:disable-next-line: object-literal-shorthand
  Rp: Rp,
  // tslint:disable-next-line: object-literal-shorthand
  Indicaciones: Indicaciones,
  // tslint:disable-next-line: object-literal-shorthand
  Firma: Firma,
  // tslint:disable-next-line: object-literal-shorthand
  idPatient: idPatient,
  // tslint:disable-next-line: object-literal-shorthand
  idDoctor: idDoctor,

  },
  );
}
registerInforme(PorPresentar: string, DiagnosticoDefinitivo: string, Firma: string,
                Certificoqueeldia: string, AtendiA: string, idPatient: string,
                idDoctor: string) {
  const urlApi = 'http://localhost:3000/informemedico';
  return this.htttp
  .post<InformeMedicoInterface>(
  urlApi,
  {
  // tslint:disable-next-line: object-literal-shorthand
  PorPresentar: PorPresentar,
  // tslint:disable-next-line: object-literal-shorthand
  DiagnosticoDefinitivo: DiagnosticoDefinitivo,
  // tslint:disable-next-line: object-literal-shorthand
  Firma: Firma,
  // tslint:disable-next-line: object-literal-shorthand
  Certificoqueeldia: Certificoqueeldia,
  // tslint:disable-next-line: object-literal-shorthand
  AtendiA: AtendiA,
  // tslint:disable-next-line: object-literal-shorthand
  idPatient: idPatient,
  // tslint:disable-next-line: object-literal-shorthand
  idDoctor: idDoctor,

  },
  );
}
registerHistorial(idPatient: string, Labios: string, Carrillos: string, Paladar: string, Lengua: string, PisodelaBoca: string,
                  Mucosa: string, Encias: string, Calculos: string, Ganglios: string, OtroMotivo: string, complicacionesanestesia: string,
                  FiebreReumatica: string, Diabetes: string, Cardiopatias: string, Tbc: string, Artritis: string, Hemorragias: string,
                  Neuralgias: string, Sinusitiss: string, Renales: string, Alergias: string, Otra: string, Observaciones: string, ) {
  const urlApi = 'http://localhost:3000/historialclinico';
  return this.htttp
  .post<HistotialClinicoInterface>(
  urlApi,
  {
    idPatient,
    Labios,
    Carrillos,
    Paladar,
    Lengua,
    PisodelaBoca,
    Mucosa,
    Encias,
    Calculos,
    Ganglios,
    OtroMotivo,
    complicacionesanestesia,
    FiebreReumatica,
    Diabetes,
    Cardiopatias,
    Tbc,
    Artritis,
    Hemorragias,
    Neuralgias,
    Sinusitiss,
    Renales,
    Alergias,
    Otra,
    Observaciones,

  },
  );
}
UpdateHistorial(id: string, idPatient: string, Labios: string, Carrillos: string, Paladar: string, Lengua: string, PisodelaBoca: string,
                Mucosa: string, Encias: string, Calculos: string, Ganglios: string, OtroMotivo: string, complicacionesanestesia: string,
                FiebreReumatica: string, Diabetes: string, Cardiopatias: string, Tbc: string, Artritis: string, Hemorragias: string,
                Neuralgias: string, Sinusitiss: string, Renales: string, Alergias: string, Otra: string, Observaciones: string, ) {
const urlApi = 'http://localhost:3000/historialclinico';
return this.htttp
.put<HistotialClinicoInterface>(
urlApi,
{
id,
idPatient,
Labios,
Carrillos,
Paladar,
Lengua,
PisodelaBoca,
Mucosa,
Encias,
Calculos,
Ganglios,
OtroMotivo,
complicacionesanestesia,
FiebreReumatica,
Diabetes,
Cardiopatias,
Tbc,
Artritis,
Hemorragias,
Neuralgias,
Sinusitiss,
Renales,
Alergias,
Otra,
Observaciones,

},
);
}
registerProcedimiento(NombreProcedimiento: string, Descripcion: string, Estatus: string, costo: string) {
  const urlApi = 'http://localhost:3000/procedimiento';
  return this.htttp
  .post<ProcedimientoInterface>(
  urlApi,
  {
  // tslint:disable-next-line: object-literal-shorthand
  NombreProcedimiento: NombreProcedimiento,
  // tslint:disable-next-line: object-literal-shorthand
  Descripcion: Descripcion,
  // tslint:disable-next-line: object-literal-shorthand
  Estatus: Estatus,
  // tslint:disable-next-line: object-literal-shorthand
  costo: costo,

  },
  );
}
updateProcedimiento(id: string, NombreProcedimiento: string, Descripcion: string, Estatus: string, costo: string) {
  const urlApi = 'http://localhost:3000/procedimiento/update';
  return this.htttp
  .put<ProcedimientoInterface>(
  urlApi,
  {
    // tslint:disable-next-line: object-literal-shorthand
    id: id,
  // tslint:disable-next-line: object-literal-shorthand
  NombreProcedimiento: NombreProcedimiento,
  // tslint:disable-next-line: object-literal-shorthand
  Descripcion: Descripcion,
  // tslint:disable-next-line: object-literal-shorthand
  Estatus: Estatus,
  // tslint:disable-next-line: object-literal-shorthand
  costo: costo,

  },
  );
}
registerProcedimientoaPadecimiento(NombreProcedimiento: string, Descripcion: string, Estatus: string, costo: string,
                                   NombrePadecimiento: string, NombrePieza: string, Imagen: string, materiales: string,
                                   instrumentos: string ) {
  const urlApi = 'http://localhost:3000/procedimientoapadecimiento';
  return this.htttp
  .post<ProcedimientoApadecimentoInterface>(
  urlApi,
  {
  // tslint:disable-next-line: object-literal-shorthand
  NombreProcedimiento: NombreProcedimiento,
  // tslint:disable-next-line: object-literal-shorthand
  Descripcion: Descripcion,
 // tslint:disable-next-line: object-literal-shorthand
 Estatus: Estatus,
 // tslint:disable-next-line: object-literal-shorthand
 costo: costo,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento: NombrePadecimiento,
 // tslint:disable-next-line: object-literal-shorthand
 NombrePieza: NombrePieza,
 // tslint:disable-next-line: object-literal-shorthand
 Imagen: Imagen,
  // tslint:disable-next-line: object-literal-shorthand
  materiales: materiales,
  // tslint:disable-next-line: object-literal-shorthand
  instrumentos: instrumentos
  },
  );
}
updateProcedimientoaPadecimiento(id: string, NombreProcedimiento: string, Descripcion: string, Estatus: string, costo: string,
                                 NombrePadecimiento: string, NombrePieza: string, Imagen: string, materiales: string,
                                 instrumentos: string ) {
const urlApi = 'http://localhost:3000/procedimientoapadecimiento/update';
return this.htttp
.put<ProcedimientoApadecimentoInterface>(
urlApi,
{
  // tslint:disable-next-line: object-literal-shorthand
  id: id,
// tslint:disable-next-line: object-literal-shorthand
NombreProcedimiento: NombreProcedimiento,
// tslint:disable-next-line: object-literal-shorthand
Descripcion: Descripcion,
// tslint:disable-next-line: object-literal-shorthand
Estatus: Estatus,
// tslint:disable-next-line: object-literal-shorthand
costo: costo,
// tslint:disable-next-line: object-literal-shorthand
NombrePadecimiento: NombrePadecimiento,
// tslint:disable-next-line: object-literal-shorthand
NombrePieza: NombrePieza,
// tslint:disable-next-line: object-literal-shorthand
Imagen: Imagen,
// tslint:disable-next-line: object-literal-shorthand
materiales: materiales,
// tslint:disable-next-line: object-literal-shorthand
instrumentos: instrumentos
},
);
}
registerProcedimientoPorPieza(NombrePadecimiento: string, NombrePieza: string, Imagen: string, Nomenclatura: string, Posicion: string) {
  const urlApi = 'http://localhost:3000/padecimientoporPieza';
  return this.htttp
  .post<PadecimientoporDienteInterface>(
  urlApi,
  {
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento: NombrePadecimiento,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePieza: NombrePieza,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen: Imagen,
  // tslint:disable-next-line: object-literal-shorthand
// tslint:disable-next-line: object-literal-shorthand
  Nomenclatura: Nomenclatura,
// tslint:disable-next-line: object-literal-shorthand
  Posicion: Posicion,
  },
  );
}
updateProcedimientoPorPieza(id: string, NombrePadecimiento: string, NombrePieza: string,
                            Imagen: string, Nomenclatura: string, Posicion: string) {
  const urlApi = 'http://localhost:3000/padecimientoporPieza/update';
  return this.htttp
  .put<PadecimientoporDienteInterface>(
  urlApi,
  {
     // tslint:disable-next-line: object-literal-shorthand
     id: id,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento: NombrePadecimiento,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePieza: NombrePieza,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen: Imagen,
  // tslint:disable-next-line: object-literal-shorthand
// tslint:disable-next-line: object-literal-shorthand
  Nomenclatura: Nomenclatura,
// tslint:disable-next-line: object-literal-shorthand
  Posicion: Posicion,
  },
  );
}
registerPadecimiento(NombrePadecimiento: string, Descripcion: string) {
  const urlApi = 'http://localhost:3000/padecimiento';
  return this.htttp
  .post<PadecimientoInterface>(
  urlApi,
  {
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento: NombrePadecimiento,
  // tslint:disable-next-line: object-literal-shorthand
  Descripcion: Descripcion,

  },
  );
}
updatePadecimiento(id: string, NombrePadecimiento: string, Descripcion: string) {
  const urlApi = 'http://localhost:3000/padecimiento/update';
  return this.htttp
  .put<PadecimientoInterface>(
  urlApi,
  {
    // tslint:disable-next-line: object-literal-shorthand
    id: id,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento: NombrePadecimiento,
  // tslint:disable-next-line: object-literal-shorthand
  Descripcion: Descripcion,

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
getAllconsultasBypatient(id: string) {
  const urlApi = 'http://localhost:3000/consulta/patient' ;
  return this.htttp.get<ConsultaInterface>(urlApi,
     {
     // tslint:disable-next-line: object-literal-shorthand
    });
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
  Recuperacion(mail: string): Observable<any> {
    const urlApi = 'http://localhost:3000/users/pass';
    return this.htttp
      .post<UserInterface>(
        urlApi,
        // tslint:disable-next-line: object-literal-shorthand
        {mail: mail},
      );
  }
  setUser(user: UserInterface): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem('currentUser', user_string);
  }
  setMaterial(material: MaterialInterface): void {
    const materialString = JSON.stringify(material);
    localStorage.setItem('currentMaterial', materialString);
  }
  setPiezaDental(pieza: PiezaDentalInterface): void {
    const piezaString = JSON.stringify(pieza);
    localStorage.setItem('currentPiezaDental', piezaString);
  }
  setProcedimiento(procedimiento: ProcedimientoInterface): void {
    const procedimientoString = JSON.stringify(procedimiento);
    localStorage.setItem('currentProcedimiento', procedimientoString);
  }
  setPadecimiento(padecimiento: PadecimientoInterface): void {
    const padecimientoString = JSON.stringify(padecimiento);
    localStorage.setItem('currentPadecimiento', padecimientoString);
  }
  setProaPadecimiento(propa: ProcedimientoApadecimentoInterface): void {
    const padecimientoString = JSON.stringify(propa);
    localStorage.setItem('currentProcedimientoAPadecimiento', padecimientoString);
  }
  setPadecimientoadiente(padecimientoadiente: PadecimientoporDienteInterface): void {
    const padecimientoString = JSON.stringify(padecimientoadiente);
    localStorage.setItem('currentPadecimientoaDiente', padecimientoString);
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
      const user: UserInterface = JSON.parse(userString);
      return user;
    } else {
      return null;
    }
  }
  getCurrentPatient(): PaatientInterface {
    const patientString = localStorage.getItem('currentPatient');
    if (!isNullOrUndefined(patientString)) {
      const patient: PaatientInterface = JSON.parse(patientString);
      return patient;
    } else {
      return null;
    }
  }
  getCurrentMaterial(): MaterialInterface {
    const materialString = localStorage.getItem('currentMaterial');
    if (!isNullOrUndefined(materialString)) {
      const material: PaatientInterface = JSON.parse(materialString);
      return material;
    } else {
      return null;
    }
  }
  getCurrentPiezaDental(): PiezaDentalInterface {
    const piezaString = localStorage.getItem('currentPiezaDental');
    if (!isNullOrUndefined(piezaString)) {
      const pieza: PiezaDentalInterface = JSON.parse(piezaString);
      return pieza;
    } else {
      return null;
    }
  }
  getCurrentProcedimiento(): ProcedimientoInterface {
    const procedimientoString = localStorage.getItem('currentPadecimiento');
    if (!isNullOrUndefined(procedimientoString)) {
      const pieza: ProcedimientoInterface = JSON.parse(procedimientoString);
      return pieza;
    } else {
      return null;
    }
  }
  getCurrentProdecimientoapadecimiento(): ProcedimientoApadecimentoInterface {
    const procedimientoString = localStorage.getItem('currentProcedimientoAPadecimiento');
    if (!isNullOrUndefined(procedimientoString)) {
      const pieza: ProcedimientoInterface = JSON.parse(procedimientoString);
      return pieza;
    } else {
      return null;
    }
  }
  getCurrentPadecimiento(): PadecimientoInterface {
    const padecimientoString = localStorage.getItem('currentProcedimiento');
    if (!isNullOrUndefined(padecimientoString)) {
      const pieza: ProcedimientoInterface = JSON.parse(padecimientoString);
      return pieza;
    } else {
      return null;
    }
  }
  getCurrentPadecimientoadiente(): PadecimientoporDienteInterface {
    const padecimientoString = localStorage.getItem('currentPadecimientoaDiente');
    if (!isNullOrUndefined(padecimientoString)) {
      const pieza: PadecimientoporDienteInterface = JSON.parse(padecimientoString);
      return pieza;
    } else {
      return null;
    }
  }
  logoutUser() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');

  }/**/
}
