import { ComponentFixture, TestBed } from '@angular/core/testing';

import { The7ofdiamondsComponent } from './the7ofdiamonds.component';

describe('The7ofdiamondsComponent', () => {
  let component: The7ofdiamondsComponent;
  let fixture: ComponentFixture<The7ofdiamondsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ The7ofdiamondsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(The7ofdiamondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
