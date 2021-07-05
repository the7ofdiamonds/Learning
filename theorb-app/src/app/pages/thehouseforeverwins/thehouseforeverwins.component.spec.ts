import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThehouseforeverwinsComponent } from './thehouseforeverwins.component';

describe('ThehouseforeverwinsComponent', () => {
  let component: ThehouseforeverwinsComponent;
  let fixture: ComponentFixture<ThehouseforeverwinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThehouseforeverwinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThehouseforeverwinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
