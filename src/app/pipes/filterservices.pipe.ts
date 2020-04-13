import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterservices'
})
export class FilterservicesPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 2) { return value; }
    const resultpatients = [];
    for (const patient of value) {
      // tslint:disable-next-line: max-line-length
      if (patient.NombredelServicio.toLowerCase().indexOf(arg.toLowerCase()) > -1 || patient.Descripcion.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultpatients.push(patient);
      }
    }
    return resultpatients;

}
}
