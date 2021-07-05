import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTHFWComponent } from './about-thfw.component';

describe('AboutTHFWComponent', () => {
  let component: AboutTHFWComponent;
  let fixture: ComponentFixture<AboutTHFWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTHFWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTHFWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
