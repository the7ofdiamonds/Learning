import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbComponent } from './orb.component';

describe('OrbComponent', () => {
  let component: OrbComponent;
  let fixture: ComponentFixture<OrbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
