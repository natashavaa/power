import { PaatientInterface } from './patients.interface';
export interface ConsultaInterface {
  id?: string;
  idDoctor?: string;
  idSpeciality?: string;
  idClinicHistory?: string;
  idPatient?: string;
  namePatient?: string;
  dniPatient?: string;
  fechaPlanificada?: string;
  hora?: string;
  motive?: string;
  status?: string;
  consultorioVisitar?: string;
}
