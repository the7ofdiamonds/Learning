import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessInsuranceComponent } from './business-insurance.component';

describe('BusinessInsuranceComponent', () => {
  let component: BusinessInsuranceComponent;
  let fixture: ComponentFixture<BusinessInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
