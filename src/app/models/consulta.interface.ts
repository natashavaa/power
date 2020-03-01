import { PaatientInterface } from './patients.interface';
export interface ConsultaInterface extends PaatientInterface {
  id?: string;
  idDoctor?: string;
  idSpeciality?: string;
  idClinicHistory?: string;
  fechaPlanificada?: string;
  hora?: string;
  motive?: string;
  status?: string;
  consultorioVisitar?: string;
}
