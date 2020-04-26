import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CsvReaderComponent } from './csv-reader.component';
import { DataPipePipe } from '../../pipes/data-pipe.pipe';
import { FilterIssueCountPipe } from '../../pipes/filter-issue-count.pipe';
import { CSVRecord } from 'src/app/models/csvRecordModel';

describe('CsvReaderComponent', () => {
  let component: CsvReaderComponent;
  let fixture: ComponentFixture<CsvReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CsvReaderComponent, DataPipePipe, FilterIssueCountPipe],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get data as json from array csv', () => {
    const date: Date = new Date();
    const csvToArray = [`"First name","Sur name","Issue count","Date of birth"`, `"Theo","Jansen","2","${date}"`];
    const headerLength = 4;
    const expectedResult: CSVRecord[] = [];
    const convertedArray: CSVRecord[] = component.getDataRecordsArrayFromCSVFile(csvToArray, headerLength);
    const item: CSVRecord = new CSVRecord();
    item.firstName = '"Theo"';
    item.surName = '"Jansen"';
    item.issueCount = '"2"' as unknown as number;
    item.dob = `"${ date }"` as unknown as Date;
    expectedResult.push(item);
    expect(convertedArray).toEqual(expectedResult);
  });

  it('should get the headers', () => {
    const csvArray: any = ['"1","2","3"', '"a","b","c"'];
    const expectedHeader: any[] = ['"1"', '"2"', '"3"'];
    const headers: any[] = component.getCSVHeader(csvArray);
    expect(expectedHeader).toEqual(headers);
  });

  it('should return blank array if header length and data length are different', () => {
    const date: Date = new Date();
    const csvToArray = ['row', `"Theo","Jansen","2","${date}"`];
    const headerLength = 2;
    const convertedArray = component.getDataRecordsArrayFromCSVFile(csvToArray, headerLength);
    expect(convertedArray.length).toBe(0);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset the file', () => {
    component.records = ['1', '2', '3'];
    component.fileReset();
    expect(component.records.length).toBeFalsy();
  });

  it('should validate the csv', () => {
    const file = {
      name: 'test.csv'
    };
    const valid = component.isValidCSV(file);
    expect(valid).toBeTruthy();
  });
});
