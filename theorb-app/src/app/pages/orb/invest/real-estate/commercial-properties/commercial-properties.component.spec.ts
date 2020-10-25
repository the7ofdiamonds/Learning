import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialPropertiesComponent } from './commercial-properties.component';

describe('CommercialPropertiesComponent', () => {
  let component: CommercialPropertiesComponent;
  let fixture: ComponentFixture<CommercialPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
