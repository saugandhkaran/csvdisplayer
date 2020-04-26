import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataPipe'
})
export class DataPipePipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      return value.substring(1, value.length - 1);
    }
    return value;
  }

}
