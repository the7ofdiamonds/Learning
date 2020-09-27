import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderorbComponent } from './headerorb.component';

describe('HeaderorbComponent', () => {
  let component: HeaderorbComponent;
  let fixture: ComponentFixture<HeaderorbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderorbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderorbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
