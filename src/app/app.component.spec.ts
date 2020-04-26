import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CsvReaderComponent } from './components/csv-reader/csv-reader.component';
import { HeaderComponent } from './components/header/header.component';
import { DataPipePipe } from './pipes/data-pipe.pipe';
import { FilterIssueCountPipe } from './pipes/filter-issue-count.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        CsvReaderComponent,
        HeaderComponent,
        DataPipePipe,
        FilterIssueCountPipe
      ],
      providers: [
      ]
    }).compileComponents();
  })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have app-header as a component`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-header')).not.toBe(null);
  });

  it(`should have as title 'csv-displayer'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('csv-displayer');
  });
});
