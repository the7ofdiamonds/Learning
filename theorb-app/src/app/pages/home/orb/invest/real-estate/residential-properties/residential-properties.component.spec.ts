import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialPropertiesComponent } from './residential-properties.component';

describe('ResidentialPropertiesComponent', () => {
  let component: ResidentialPropertiesComponent;
  let fixture: ComponentFixture<ResidentialPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentialPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentialPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
