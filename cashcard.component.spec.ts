import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashcardComponent } from './cashcard.component';

describe('CashcardComponent', () => {
  let component: CashcardComponent;
  let fixture: ComponentFixture<CashcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
