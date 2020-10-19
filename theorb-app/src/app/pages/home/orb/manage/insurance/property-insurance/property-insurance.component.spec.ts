import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyInsuranceComponent } from './property-insurance.component';

describe('PropertyInsuranceComponent', () => {
  let component: PropertyInsuranceComponent;
  let fixture: ComponentFixture<PropertyInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
