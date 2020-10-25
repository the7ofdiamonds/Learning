import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessesForSaleComponent } from './businesses-for-sale.component';

describe('BusinessesForSaleComponent', () => {
  let component: BusinessesForSaleComponent;
  let fixture: ComponentFixture<BusinessesForSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessesForSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessesForSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
