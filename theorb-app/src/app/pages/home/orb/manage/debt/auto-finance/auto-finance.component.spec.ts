import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFinanceComponent } from './auto-finance.component';

describe('AutoFinanceComponent', () => {
  let component: AutoFinanceComponent;
  let fixture: ComponentFixture<AutoFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoFinanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
