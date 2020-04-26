import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CsvReaderComponent } from './components/csv-reader/csv-reader.component';
import { HeaderComponent } from './components/header/header.component';
import { DataPipePipe } from './pipes/data-pipe.pipe';
import { FilterIssueCountPipe } from './pipes/filter-issue-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CsvReaderComponent,
    HeaderComponent,
    DataPipePipe,
    FilterIssueCountPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
