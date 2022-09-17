import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvReaderPageComponent } from './csv-reader-page.component';

describe('CsvReaderComponent', () => {
  let component: CsvReaderPageComponent;
  let fixture: ComponentFixture<CsvReaderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CsvReaderPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CsvReaderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
