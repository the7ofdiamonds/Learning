import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOrbComponent } from './about-orb.component';

describe('AboutOrbComponent', () => {
  let component: AboutOrbComponent;
  let fixture: ComponentFixture<AboutOrbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutOrbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOrbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
