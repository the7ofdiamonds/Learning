import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutorbComponent } from './aboutorb.component';

describe('AboutorbComponent', () => {
  let component: AboutorbComponent;
  let fixture: ComponentFixture<AboutorbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutorbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutorbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
