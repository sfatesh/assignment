import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashsummaryComponent } from './cashsummary.component';

describe('CashsummaryComponent', () => {
  let component: CashsummaryComponent;
  let fixture: ComponentFixture<CashsummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashsummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
