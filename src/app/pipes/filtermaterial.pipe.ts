import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtermaterial'
})
export class FiltermaterialPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 2) { return value; }
    const resultpatients = [];
    for (const material of value) {
      // tslint:disable-next-line: max-line-length
      if (material.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 || material.especiality.toLowerCase().indexOf(arg.toLowerCase()) > -1 ) {
        resultpatients.push(material);
      }
    }
    return resultpatients;
  }


}
