import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialPropertyComponent } from './commercial-property.component';

describe('CommercialPropertyComponent', () => {
  let component: CommercialPropertyComponent;
  let fixture: ComponentFixture<CommercialPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
