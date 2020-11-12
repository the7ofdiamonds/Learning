import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDebtComponent } from './personal-debt.component';

describe('PersonalDebtComponent', () => {
  let component: PersonalDebtComponent;
  let fixture: ComponentFixture<PersonalDebtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDebtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDebtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
