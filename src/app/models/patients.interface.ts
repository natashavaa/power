import { UserInterface } from './user.interface';
export interface PaatientInterface extends UserInterface {
    id?: string;
    statusC?: string;
    homeAddress?: string;
    occupation ?: string;
    workAddress: string;
    mobile?: number; 
    birthplace?: string;
    sentBy?: string;
    dentalColor?: string;
    familyNumber?: number;
    familyNumberHome?: number;
    familyName?: string;
    numberEmergency?: number;
}
