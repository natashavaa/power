import { UserInterface } from './user.interface';
export interface PaatientInterface extends UserInterface {
    id?: string;
    idClinicHistory?: string;
    statusC?: string;
    homeAddress?: string;
    occupation ?: string;
    workAddress?: string;
    mobile?: string;
    birthplace?: string;
    sentBy?: string;
    registradoPor?: string;
    dentalColor?: string;
    familyNumber?: string;
    familyNumberHome?: string;
    familyName?: string;
    numberEmergency?: string;
}
