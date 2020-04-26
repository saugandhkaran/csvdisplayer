import { FilterIssueCountPipe } from './filter-issue-count.pipe';
import { CSVRecord } from '../models/csvRecordModel';

describe('FilterIssueCountPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterIssueCountPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return record with issue count 5', () => {
    const testRecord: CSVRecord[] = [
      {
        firstName: '"Theo"',
        surName: '"Jansen"',
        issueCount: '5' as unknown as number,
        dob: '"1978-01-02T00:00:00"' as unknown as Date
      }, {
        firstName: '"Fiona"',
        surName: '"de Vries"',
        issueCount: '7' as unknown as number,
        dob: '"1950-11-12T00:00:00"' as unknown as Date
      }];
    const expected: CSVRecord[] = [
      {
        firstName: '"Fiona"',
        surName: '"de Vries"',
        issueCount: '7' as unknown as number,
        dob: '"1950-11-12T00:00:00"' as unknown as Date
      }
    ];
    const pipe = new FilterIssueCountPipe();
    const result = pipe.transform(testRecord, '7');
    expect(result).toEqual(expected);
  });
});
