import { Pipe, PipeTransform } from '@angular/core';
import { CSVRecord } from '../models/csvRecordModel';

@Pipe({
  name: 'filterIssueCount'
})
export class FilterIssueCountPipe implements PipeTransform {

  transform(value: CSVRecord[], args: string): any {
    if (args) {
      return value.filter((element: any) => {
        return element.issueCount == args;
      });
    }
    return value;
  }

}
