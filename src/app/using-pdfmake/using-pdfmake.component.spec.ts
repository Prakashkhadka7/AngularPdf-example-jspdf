import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingPdfmakeComponent } from './using-pdfmake.component';

describe('UsingPdfmakeComponent', () => {
  let component: UsingPdfmakeComponent;
  let fixture: ComponentFixture<UsingPdfmakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingPdfmakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingPdfmakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
