import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentPropertiesComponent } from './investment-properties.component';

describe('InvestmentPropertiesComponent', () => {
  let component: InvestmentPropertiesComponent;
  let fixture: ComponentFixture<InvestmentPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
