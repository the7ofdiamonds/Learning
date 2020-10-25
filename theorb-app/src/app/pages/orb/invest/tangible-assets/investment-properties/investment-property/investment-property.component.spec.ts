import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentPropertyComponent } from './investment-property.component';

describe('InvestmentPropertyComponent', () => {
  let component: InvestmentPropertyComponent;
  let fixture: ComponentFixture<InvestmentPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
