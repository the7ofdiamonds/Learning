import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongSleevesComponent } from './long-sleeves.component';

describe('LongSleevesComponent', () => {
  let component: LongSleevesComponent;
  let fixture: ComponentFixture<LongSleevesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongSleevesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongSleevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
