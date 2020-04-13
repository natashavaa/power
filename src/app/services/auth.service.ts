
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
import { ServicioInterface } from '../models/servicios.interface';
import { PresupustoInterface } from 'src/app/models/presupuesto.interace';
import { OdontogramaInterface } from '../models/odontograma.interface';
import { SeguimientoDienteInterface } from '../models/seguimientodiente.interdace';
import { TodoslosdientesInterface } from '../models/todoslosdientes.interface';
import { OrtodonciaInterface } from '../models/ortodoncia.interface';
import { SeguimientoOrtodonciaInterface } from '../models/ortodonciaseguimiento.interface';
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
  registerOdontograma(
    idPatient: string,
    status: string,
    NombrePadecimiento1: string,
    Imagen1: string,
    NombrePadecimiento2: string,
    Imagen2: string,
    NombrePadecimiento3: string,
    Imagen3: string,
    NombrePadecimiento4: string,
    Imagen4: string,
    NombrePadecimiento5: string,
    Imagen5: string,
    NombrePadecimiento6: string,
    Imagen6: string,
    NombrePadecimiento7: string,
    Imagen7: string,
    NombrePadecimiento8: string,
    Imagen8: string,
    NombrePadecimiento9: string,
    Imagen9: string,
    NombrePadecimiento10: string,
    Imagen10: string,
    NombrePadecimiento11: string,
    Imagen11: string,
    NombrePadecimiento12: string,
    Imagen12: string,
    NombrePadecimiento13: string,
    Imagen13: string,
    NombrePadecimiento14: string,
    Imagen14: string,
    NombrePadecimiento15: string,
    Imagen15: string,
    NombrePadecimiento16: string,
    Imagen16: string,
    NombrePadecimiento17: string,
    Imagen17: string,
    NombrePadecimiento18: string,
    Imagen18: string,
    NombrePadecimiento19: string,
    Imagen19: string,
    NombrePadecimiento20: string,
    Imagen20: string,
    NombrePadecimiento21: string,
    Imagen21: string,
    NombrePadecimiento22: string,
    Imagen22: string,
    NombrePadecimiento23: string,
    Imagen23: string,
    NombrePadecimiento24: string,
    Imagen24: string,
    NombrePadecimiento25: string,
    Imagen25: string,
    NombrePadecimiento26: string,
    Imagen26: string,
    NombrePadecimiento27: string,
    Imagen27: string,
    NombrePadecimiento28: string,
    Imagen28: string,
    NombrePadecimiento29: string,
    Imagen29: string,
    NombrePadecimiento30: string,
    Imagen30: string,
    NombrePadecimiento31: string,
    Imagen31: string,
    NombrePadecimiento32: string,
    Imagen32: string,
    diagnosticoCompleto: string
  ) {
const urlApi = 'http://localhost:3000/odontograma';
return this.htttp
.post<OdontogramaInterface>(
urlApi,
{
  // tslint:disable-next-line: object-literal-shorthand
  idPatient: idPatient,
  // tslint:disable-next-line: object-literal-shorthand
  status: status,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento1: NombrePadecimiento1,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen1: Imagen1,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento2: NombrePadecimiento2,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen2: Imagen2,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento3: NombrePadecimiento3,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen3: Imagen3,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento4: NombrePadecimiento4,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen4: Imagen4,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento5: NombrePadecimiento5,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen5: Imagen5,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento6: NombrePadecimiento6,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen6: Imagen6,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento7: NombrePadecimiento7,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen7: Imagen7,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento8: NombrePadecimiento8,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen8: Imagen8,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento9: NombrePadecimiento9,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen9: Imagen9,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento10: NombrePadecimiento10,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen10: Imagen10,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento11: NombrePadecimiento11,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen11: Imagen11,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento12: NombrePadecimiento12,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen12: Imagen12,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento13: NombrePadecimiento13,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen13: Imagen13,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento14: NombrePadecimiento14,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen14: Imagen14,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento15: NombrePadecimiento15,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen15: Imagen15,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento16: NombrePadecimiento16,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen16: Imagen16,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento17: NombrePadecimiento17,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen17: Imagen17,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento18: NombrePadecimiento18,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen18: Imagen18,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento19: NombrePadecimiento19,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen19: Imagen19,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento20: NombrePadecimiento20,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen20: Imagen20,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento21: NombrePadecimiento21,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen21: Imagen21,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento22: NombrePadecimiento22,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen22: Imagen22,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento23: NombrePadecimiento23,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen23: Imagen23,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento24: NombrePadecimiento24,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen24: Imagen24,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento25: NombrePadecimiento25,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen25: Imagen25,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento26: NombrePadecimiento26,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen26: Imagen26,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento27: NombrePadecimiento27,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen27: Imagen27,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento28: NombrePadecimiento28,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen28: Imagen28,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento29: NombrePadecimiento29,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen29: Imagen29,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento30: NombrePadecimiento30,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen30: Imagen30,
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento31: NombrePadecimiento31,
  // tslint:disable-next-line: object-literal-shorthand
  Imagen31: Imagen31,
  // tslint: disable-next-line: object-literal-shorthand
  // tslint:disable-next-line: object-literal-shorthand
  NombrePadecimiento32: NombrePadecimiento32,
  // tslint: disable-next-line: object-literal-shorthand
  // tslint:disable-next-line: object-literal-shorthand
  Imagen32: Imagen32,
  // tslint:disable-next-line: object-literal-shorthand
  diagnosticoCompleto: diagnosticoCompleto,
},
);
}
  updateMaterial(id: string, name: string, cantidad: number,
                 especiality: string, costo: string, idDoctor: string,
                 estadoDisp: string, usados: number) {
    const urlApi = 'http://localhost:3000/material/update';
    return this.htttp
    .put<MaterialInterface>(
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
  deleteServicio(id: string) {
    const urlApi = `http://localhost:3000/servicios/delete/${id}`;
    return this.htttp.delete<ServicioInterface>(urlApi,
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
                mobile: string, birthplace: string, sentBy: string,
                dentalColor: string, familyNumber: string,
                familyName: string, familyNumberHome: string,
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
              mobile: string, birthplace: string, sentBy: string,
              dentalColor: string, familyNumber: string,
              familyName: string, familyNumberHome: string,
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
registerPresupuesto(idPatient: string, PresupuestoBsf: string, PresupuestoDolares: string,
                    Abono: string, Debe: string, Estatus: string,
                    Estimado: string, serviciosTratados: string, FechadeCreacion: string,
                    FechasdePagos: string) {
  const urlApi = 'http://localhost:3000/presupuesto';
  return this.htttp
  .post<PresupustoInterface>(
  urlApi,
  {
  // tslint:disable-next-line: object-literal-shorthand
  idPatient: idPatient,
  // tslint:disable-next-line: object-literal-shorthand
  PresupuestoBsf: PresupuestoBsf,
  // tslint:disable-next-line: object-literal-shorthand
  PresupuestoDolares: PresupuestoDolares,
  // tslint:disable-next-line: object-literal-shorthand
  Abono: Abono,
  // tslint:disable-next-line: object-literal-shorthand
  Debe: Debe,
  // tslint:disable-next-line: object-literal-shorthand
  Estatus: Estatus,
  // tslint:disable-next-line: object-literal-shorthand
  Estimado: Estimado,
  // tslint:disable-next-line: object-literal-shorthand
  serviciosTratados: serviciosTratados,
  // tslint:disable-next-line: object-literal-shorthand
  FechadeCreacion: FechadeCreacion,
  // tslint:disable-next-line: object-literal-shorthand
  FechasdePagos: FechasdePagos,
  },
  );
}
updatePresupuesto(id: string, idPatient: string, PresupuestoBsf: string, PresupuestoDolares: string,
                  Abono: string, Debe: string, Estatus: string,
                  Estimado: string, serviciosTratados: string, FechadeCreacion: string,
                  FechasdePagos: string) {
const urlApi = 'http://localhost:3000/presupuesto/update';
return this.htttp
.put<PresupustoInterface>(
urlApi,
{
  // tslint:disable-next-line: object-literal-shorthand
  id: id,
// tslint:disable-next-line: object-literal-shorthand
idPatient: idPatient,
// tslint:disable-next-line: object-literal-shorthand
PresupuestoBsf: PresupuestoBsf,
// tslint:disable-next-line: object-literal-shorthand
PresupuestoDolares: PresupuestoDolares,
// tslint:disable-next-line: object-literal-shorthand
Abono: Abono,
// tslint:disable-next-line: object-literal-shorthand
Debe: Debe,
// tslint:disable-next-line: object-literal-shorthand
Estatus: Estatus,
// tslint:disable-next-line: object-literal-shorthand
Estimado: Estimado,
// tslint:disable-next-line: object-literal-shorthand
serviciosTratados: serviciosTratados,
 // tslint:disable-next-line: object-literal-shorthand
 FechadeCreacion: FechadeCreacion,
 // tslint:disable-next-line: object-literal-shorthand
 FechasdePagos: FechasdePagos,
},
);
}
registerServicio(NombredelServicio: string, Descripcion: string, Costo: string) {
  const urlApi = 'http://localhost:3000/servicios';
  return this.htttp
  .post<ServicioInterface>(
  urlApi,
  {
  // tslint:disable-next-line: object-literal-shorthand
  NombredelServicio: NombredelServicio,
  // tslint:disable-next-line: object-literal-shorthand
  Descripcion: Descripcion,
  // tslint:disable-next-line: object-literal-shorthand
  Costo: Costo,

  },
  );
}
updateServicio(id: string, NombredelServicio: string, Descripcion: string, Costo: string) {
  const urlApi = 'http://localhost:3000/servicios/update';
  return this.htttp
  .put<ServicioInterface>(
  urlApi,
  {
    // tslint:disable-next-line: object-literal-shorthand
    id: id,
  // tslint:disable-next-line: object-literal-shorthand
  NombredelServicio: NombredelServicio,
  // tslint:disable-next-line: object-literal-shorthand
  Descripcion: Descripcion,
  // tslint:disable-next-line: object-literal-shorthand
  Costo: Costo,

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
registertodoslosdientes(idPatient: string, Imagen: string, ProcedimientoOdontologico: string,
                        Estatus: string, Instrumentos: string, Materiales: string,
                        Diagnostico: string, Recomendaciones: string, Observaciones: string) {
  const urlApi = 'http://localhost:3000/seguimientotodosdientes';
  return this.htttp
  .post<TodoslosdientesInterface>(
  urlApi,
  {
    // tslint:disable-next-line: object-literal-shorthand
    idPatient: idPatient,
    // tslint:disable-next-line: object-literal-shorthand
    Imagen: Imagen,
  // tslint:disable-next-line: object-literal-shorthand
  ProcedimientoOdontologico: ProcedimientoOdontologico,
  // tslint:disable-next-line: object-literal-shorthand
  Estatus: Estatus,
  // tslint:disable-next-line: object-literal-shorthand
  Instrumentos: Instrumentos,
  // tslint:disable-next-line: object-literal-shorthand
  Materiales: Materiales,
  // tslint:disable-next-line: object-literal-shorthand
  Diagnostico: Diagnostico,
  // tslint:disable-next-line: object-literal-shorthand
  Recomendaciones: Recomendaciones,
  // tslint:disable-next-line: object-literal-shorthand
  Observaciones: Observaciones,

  },
  );
}
Updatetodoslosdientes(id: string, idPatient: string, Imagen: string, ProcedimientoOdontologico: string,
                      Estatus: string, Instrumentos: string, Materiales: string,
                      Diagnostico: string, Recomendaciones: string, Observaciones: string) {
const urlApi = 'http://localhost:3000/seguimientotodosdientes/update';
return this.htttp
.put<TodoslosdientesInterface>(
urlApi,
{
  // tslint:disable-next-line: object-literal-shorthand
  id: id,
// tslint:disable-next-line: object-literal-shorthand
idPatient: idPatient,
// tslint:disable-next-line: object-literal-shorthand
Imagen: Imagen,
// tslint:disable-next-line: object-literal-shorthand
ProcedimientoOdontologico: ProcedimientoOdontologico,
// tslint:disable-next-line: object-literal-shorthand
Estatus: Estatus,
// tslint:disable-next-line: object-literal-shorthand
Instrumentos: Instrumentos,
// tslint:disable-next-line: object-literal-shorthand
Materiales: Materiales,
// tslint:disable-next-line: object-literal-shorthand
Diagnostico: Diagnostico,
// tslint:disable-next-line: object-literal-shorthand
Recomendaciones: Recomendaciones,
// tslint:disable-next-line: object-literal-shorthand
Observaciones: Observaciones,

},
);
}
registerSeguimiento(idOdontograma: string, Fecha: string,
                    TratamientoEfectuado: string, Observaciones: string,
                    ConsultasPosteriores: string, Estatus: string) {
  const urlApi = 'http://localhost:3000/seguimientoadiente';
  return this.htttp
  .post<SeguimientoDienteInterface>(
  urlApi,
  {
    // tslint:disable-next-line: object-literal-shorthand
    idOdontograma: idOdontograma,
  // tslint:disable-next-line: object-literal-shorthand
  Fecha: Fecha,
  // tslint:disable-next-line: object-literal-shorthand
  TratamientoEfectuado: TratamientoEfectuado,
  // tslint:disable-next-line: object-literal-shorthand
  Observaciones: Observaciones,
  // tslint:disable-next-line: object-literal-shorthand
  ConsultasPosteriores: ConsultasPosteriores,
   // tslint:disable-next-line: object-literal-shorthand
   Estatus: Estatus,

  },
  );
}
registerSeguimientoOrtodoncia(
  idOrtodoncia: string,
  ComentariodegOGNPMAX: string,
  ComentariodesUPINF: string,
  ComentariodeaNB: string,
  ComentariodesNB: string,
  ComentariodesNA: string,
  ComentariodesNGN: string,
  ComentariodenAPOG: string,
  ComentariodesNGOGN: string,
  ComentariodesNPLO: string,
  ComentariodesNFH: string,
  Fecha: string,
  TratamientoEfectuado: string,
  Observaciones: string,
  ConsultasPosteriores: string,
  Estatus: string,
) {
const urlApi = 'http://localhost:3000/seguimientoortodoncia';
return this.htttp
.post<SeguimientoOrtodonciaInterface>(
urlApi,
{
  // tslint:disable-next-line: object-literal-shorthand
  idOrtodoncia: idOrtodoncia,
  // tslint:disable-next-line: object-literal-shorthand
  ComentariodegOGNPMAX: ComentariodegOGNPMAX,
  // tslint:disable-next-line: object-literal-shorthand
  ComentariodesUPINF: ComentariodesUPINF,
  // tslint:disable-next-line: object-literal-shorthand
  ComentariodeaNB: ComentariodeaNB,
  // tslint:disable-next-line: object-literal-shorthand
  ComentariodesNB: ComentariodesNB,
  // tslint:disable-next-line: object-literal-shorthand
  ComentariodesNA: ComentariodesNA,
  // tslint:disable-next-line: object-literal-shorthand
  ComentariodesNGN: ComentariodesNGN,
  // tslint:disable-next-line: object-literal-shorthand
  ComentariodenAPOG: ComentariodenAPOG,
  // tslint:disable-next-line: object-literal-shorthand
  ComentariodesNGOGN: ComentariodesNGOGN,
  // tslint:disable-next-line: object-literal-shorthand
  ComentariodesNPLO: ComentariodesNPLO,
  // tslint:disable-next-line: object-literal-shorthand
  ComentariodesNFH: ComentariodesNFH,
// tslint:disable-next-line: object-literal-shorthand
Fecha: Fecha,
// tslint:disable-next-line: object-literal-shorthand
TratamientoEfectuado: TratamientoEfectuado,
// tslint:disable-next-line: object-literal-shorthand
Observaciones: Observaciones,
// tslint:disable-next-line: object-literal-shorthand
ConsultasPosteriores: ConsultasPosteriores,
// tslint:disable-next-line: object-literal-shorthand
Estatus: Estatus,

},
);
}
registerSeguimientotodoslosdientes(idOdontograma: string, Fecha: string,
                                   TratamientoEfectuado: string, Observaciones: string,
                                   ConsultasPosteriores: string, Estatus: string) {
const urlApi = 'http://localhost:3000/seguimientodetalletodos';
return this.htttp
.post<TodoslosdientesInterface>(
urlApi,
{
// tslint:disable-next-line: object-literal-shorthand
idOdontograma: idOdontograma,
// tslint:disable-next-line: object-literal-shorthand
Fecha: Fecha,
// tslint:disable-next-line: object-literal-shorthand
TratamientoEfectuado: TratamientoEfectuado,
// tslint:disable-next-line: object-literal-shorthand
Observaciones: Observaciones,
// tslint:disable-next-line: object-literal-shorthand
ConsultasPosteriores: ConsultasPosteriores,
// tslint:disable-next-line: object-literal-shorthand
Estatus: Estatus,

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
registerOrtodoncia(
  idPatient: string,
  imagen: string,
  Medicaciones: string,
  PlandeTratamiento: string,
  Diagnostico: string,
  ClaseCanina1: string,
  ClaseCanina2: string,
  ClasificacionAngleCanina1: string,
  ClasificacionAngleCanina2: string,
  ClaseMolar1: string,
  ClaseMolar2: string,
  ClasificacionAngleMolar1: string,
  ClasificacionAngleMolar2: string,
  DivisionesMolar1: string,
  DivisionesMolarV1: string,
  DivisionesMolar2: string,
  DivisionesMolarV2: string,
  CategoriasMolar1: string,
  CategoriasMolar2: string,
  ClaseEsqueletalClasificacionAngle: string,
  Overjet: string,
  OverBite: string,
  LineaMedia: string,
  TipodePerfil: string,
  gOGNPMAX: string,
  sUPINF: string,
  aNB: string,
  sNB: string,
  sNA: string,
  sNGN: string,
  nAPOG: string,
  sNGOGN: string,
  sNPLO: string,
  sNFH: string,
) {
  const urlApi = 'http://localhost:3000/ortodoncia';
  return this.htttp
  .post<OrtodonciaInterface>(
  urlApi,
  {
    // tslint:disable-next-line: object-literal-shorthand
  idPatient: idPatient,
  // tslint:disable-next-line: object-literal-shorthand
  imagen: imagen,
  // tslint:disable-next-line: object-literal-shorthand
  Medicaciones: Medicaciones,
  // tslint:disable-next-line: object-literal-shorthand
  PlandeTratamiento: PlandeTratamiento,
  // tslint:disable-next-line: object-literal-shorthand
  Diagnostico: Diagnostico,
  // tslint:disable-next-line: object-literal-shorthand
  ClaseCanina1: ClaseCanina1,
  // tslint:disable-next-line: object-literal-shorthand
  ClaseCanina2: ClaseCanina2,
  // tslint:disable-next-line: object-literal-shorthand
  ClasificacionAngleCanina1: ClasificacionAngleCanina1,
  // tslint:disable-next-line: object-literal-shorthand
  ClasificacionAngleCanina2: ClasificacionAngleCanina2,
  // tslint:disable-next-line: object-literal-shorthand
  ClaseMolar1: ClaseMolar1,
  // tslint:disable-next-line: object-literal-shorthand
  ClaseMolar2: ClaseMolar2,
  // tslint:disable-next-line: object-literal-shorthand
  ClasificacionAngleMolar1: ClasificacionAngleMolar1,
  // tslint:disable-next-line: object-literal-shorthand
  ClasificacionAngleMolar2: ClasificacionAngleMolar2,
  // tslint:disable-next-line: object-literal-shorthand
  DivisionesMolar1: DivisionesMolar1,
  // tslint:disable-next-line: object-literal-shorthand
  DivisionesMolarV1: DivisionesMolarV1,
  // tslint:disable-next-line: object-literal-shorthand
  DivisionesMolar2: DivisionesMolar2,
  // tslint:disable-next-line: object-literal-shorthand
  DivisionesMolarV2: DivisionesMolarV2,
  // tslint:disable-next-line: object-literal-shorthand
  CategoriasMolar1: CategoriasMolar1,
  // tslint:disable-next-line: object-literal-shorthand
  CategoriasMolar2: CategoriasMolar2,
  // tslint:disable-next-line: object-literal-shorthand
  ClaseEsqueletalClasificacionAngle: ClaseEsqueletalClasificacionAngle,
  // tslint:disable-next-line: object-literal-shorthand
  Overjet: Overjet,
  // tslint:disable-next-line: object-literal-shorthand
  OverBite: OverBite,
  // tslint:disable-next-line: object-literal-shorthand
  LineaMedia: LineaMedia,
  // tslint:disable-next-line: object-literal-shorthand
  TipodePerfil: TipodePerfil,
  // tslint:disable-next-line: object-literal-shorthand
  gOGNPMAX: gOGNPMAX,
  // tslint:disable-next-line: object-literal-shorthand
  sUPINF: sUPINF,
  // tslint:disable-next-line: object-literal-shorthand
  aNB: aNB,
  // tslint:disable-next-line: object-literal-shorthand
  sNB: sNB,
  // tslint:disable-next-line: object-literal-shorthand
  sNA: sNA,
  // tslint:disable-next-line: object-literal-shorthand
  sNGN: sNGN,
  // tslint:disable-next-line: object-literal-shorthand
  nAPOG: nAPOG,
  // tslint:disable-next-line: object-literal-shorthand
  sNGOGN: sNGOGN,
  // tslint:disable-next-line: object-literal-shorthand
  sNPLO: sNPLO,
  // tslint:disable-next-line: object-literal-shorthand
  sNFH: sNFH,

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
  .put<InstrumentoInterface>(
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
  setServicio(pieza: ServicioInterface): void {
    const piezaString = JSON.stringify(pieza);
    localStorage.setItem('currentServicio', piezaString);
  }
  setProcedimiento(procedimiento: ProcedimientoInterface): void {
    const procedimientoString = JSON.stringify(procedimiento);
    localStorage.setItem('currentProcedimiento', procedimientoString);
  }
  setPadecimiento(padecimiento: PadecimientoInterface): void {
    const padecimientoString = JSON.stringify(padecimiento);
    localStorage.setItem('currentPadecimiento', padecimientoString);
  }
  setPresupuesto(presupuesto: PresupustoInterface): void {
    const padecimientoString = JSON.stringify(presupuesto);
    localStorage.setItem('currentPresupuesto', padecimientoString);
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
  setPatientConsulta(patient: PaatientInterface): void {
    const patientString = JSON.stringify(patient);
    localStorage.setItem('currentPatientConsulta', patientString);
  }
  setOdontogramaDiente(patient: OdontogramaInterface): void {
    const patientString = JSON.stringify(patient);
    localStorage.setItem('currentOdontogramaDiente', patientString);
  }
  setTodoslosDientes(patient: TodoslosdientesInterface): void {
    const patientString = JSON.stringify(patient);
    localStorage.setItem('currentTodoslosdientes', patientString);
  }
  setodortodoncia(patient: OrtodonciaInterface): void {
    const patientString = JSON.stringify(patient);
    localStorage.setItem('currentOrtodoncia', patientString);
  }
  setdxd(odo: OdontogramaInterface): void {
    const patientString = JSON.stringify(odo);
    localStorage.setItem('currentOdontodxd', patientString);
  }

  setToken(token): void {
    localStorage.setItem('accessToken', token);
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }
  getortodoncia(): OrtodonciaInterface {
    const userString = localStorage.getItem('currentOrtodoncia');
    if (!isNullOrUndefined(userString)) {
      const user: OrtodonciaInterface = JSON.parse(userString);
      return user;
    } else {
      return null;
    }
  }
  getTodoslosDientes(): TodoslosdientesInterface {
    const userString = localStorage.getItem('currentTodoslosdientes');
    if (!isNullOrUndefined(userString)) {
      const user: TodoslosdientesInterface = JSON.parse(userString);
      return user;
    } else {
      return null;
    }
  }
  getdxd(): OdontogramaInterface {
    const userString = localStorage.getItem('currentOdontodxd');
    if (!isNullOrUndefined(userString)) {
      const user: OdontogramaInterface = JSON.parse(userString);
      return user;
    } else {
      return null;
    }
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
  getCurrentPresupuesto(): PresupustoInterface {
    const userString = localStorage.getItem('currentPresupuesto');
    if (!isNullOrUndefined(userString)) {
      const user: PresupustoInterface = JSON.parse(userString);
      return user;
    } else {
      return null;
    }
  }
  getCurrentOdontogramaDiente(): OdontogramaInterface {
    const userString = localStorage.getItem('currentOdontogramaDiente');
    if (!isNullOrUndefined(userString)) {
      const user: OdontogramaInterface = JSON.parse(userString);
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
  getCurrentPatientConsulta(): PaatientInterface {
    const patientString = localStorage.getItem('currentPatientConsulta');
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
      const material: MaterialInterface = JSON.parse(materialString);
      return material;
    } else {
      return null;
    }
  }
  getCurrentServicio(): ServicioInterface {
    const materialString = localStorage.getItem('currentServicio');
    if (!isNullOrUndefined(materialString)) {
      const material: ServicioInterface = JSON.parse(materialString);
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
    const padecimientoString = localStorage.getItem('currentPadecimiento');
    if (!isNullOrUndefined(padecimientoString)) {
      const pieza: PadecimientoInterface = JSON.parse(padecimientoString);
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
