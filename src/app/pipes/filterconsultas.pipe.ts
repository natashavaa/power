import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterconsultas'
})
export class FilterconsultasPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 2) { return value; }
    const resultpatients = [];
    for (const patient of value) {
      // tslint:disable-next-line: max-line-length
      if (patient.fechaPlanificada.toLowerCase().indexOf(arg.toLowerCase()) > -1 || patient.dia.toLowerCase().indexOf(arg.toLowerCase()) > -1 || patient.atendidoPor.toLowerCase().indexOf(arg.toLowerCase()) > -1 || patient.dniPatient.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultpatients.push(patient);
      }
    }
    return resultpatients;

}
}
