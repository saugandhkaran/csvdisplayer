import { Component, OnInit, ViewChild } from '@angular/core';
import { CSVRecord } from '../../models/csvRecordModel';

@Component({
  selector: 'app-csv-reader',
  templateUrl: './csv-reader.component.html',
  styleUrls: ['./csv-reader.component.scss']
})
export class CsvReaderComponent implements OnInit {

  constructor() { }
  public records: any[] = [];
  public error: string;
  public headersRow: any[] = [];
  public requiredIssueCount: number;
  @ViewChild('csvReader') csvReader: any;
  ngOnInit() {
  }

  /**
   * Trigger the reader function to read csv file and create an array
   * @param $event user event trigger
   */
  uploadCSV($event: any): void {
    this.records = [];
    this.error = '';
    const files = $event.srcElement.files;
    const input = $event.target;
    if (!this.isValidCSV(files[0])) {
      this.error = 'Please enter a valid CSV';
      this.fileReset();
      return;
    }

    const reader = new FileReader();
    reader.readAsText(input.files[0]);
    reader.onload = () => {
      const csvData = reader.result;
      const csvToArray = (csvData as string).split(/\r\n|\n/);
      this.headersRow = this.getCSVHeader(csvToArray);
      if (!this.headersRow.length) {
        this.error = 'No records found. The CSV file is probably empty.';
        return;
      }
      this.records = this.getDataRecordsArrayFromCSVFile(csvToArray, this.headersRow.length);
    };
  }

 /**
  * Get the records to be displayed under proper header
  * @param csvToArray all the rows in an array
  * @param headerLength Number of columns
  * @returns an array containing all rows as objects
  */
  getDataRecordsArrayFromCSVFile(csvToArray: any, headerLength: any) {
    const csvArr = [];
    for (let i = 1; i < csvToArray.length; i++) {
      const currentRecord = (csvToArray[i] as string).split(',');
      if (currentRecord.length === headerLength) {
        const csvItem: CSVRecord = new CSVRecord();
        csvItem.firstName = currentRecord[0].trim();
        csvItem.surName = currentRecord[1].trim();
        csvItem.issueCount = currentRecord[2] as unknown as number;
        csvItem.dob = currentRecord[3] as unknown as Date;
        csvArr.push(csvItem);
      }
    }
    return csvArr;
  }

  /**
   * Get the headers for the data view
   * @param csvToArray records as rows inside an array
   * @returns an array containing the 1st row of the csv
   */
  getCSVHeader(csvToArray: any): any {
    let headers = [];
    if ((csvToArray[0] as string).length) {
      headers = (csvToArray[0] as string).split(',');
    }
    return headers;
  }

  /**
   * Validates the extension of file type
   * @param file file input element from html
   */
  isValidCSV(file: any): boolean {
    return file.name.endsWith('.csv');
  }

  /**
   * Resets the csv file input
   */
  fileReset() {
    this.csvReader.nativeElement.value = '';
    this.records = [];
  }

}
