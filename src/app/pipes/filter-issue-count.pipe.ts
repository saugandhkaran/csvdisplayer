import { Pipe, PipeTransform } from '@angular/core';
import { CSVRecord } from '../models/csvRecordModel';

@Pipe({
  name: 'filterIssueCount'
})
export class FilterIssueCountPipe implements PipeTransform {

  transform(value: CSVRecord[], filterValue: string, filterCriteria: string): any {
    if (filterValue && filterCriteria) {
      return value.filter((element: any) => {
        return element[filterCriteria] == filterValue;
      });
    }
    return value;
  }

}
