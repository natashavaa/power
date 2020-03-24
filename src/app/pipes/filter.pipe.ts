import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 2) { return value; }
    const resultpatients = [];
    for (const patient of value) {
      // tslint:disable-next-line: max-line-length
      if (patient.dni.toLowerCase().indexOf(arg.toLowerCase()) > -1 || patient.name.toLowerCase().indexOf(arg.toLowerCase()) > -1  || patient.userType.toLowerCase().indexOf(arg.toLowerCase()) > -1 || patient.registradoPor.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultpatients.push(patient);
      };
    };
    return resultpatients;
  }



}
