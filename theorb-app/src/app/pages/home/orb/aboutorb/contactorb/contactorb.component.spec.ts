import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactorbComponent } from './contactorb.component';

describe('ContactorbComponent', () => {
  let component: ContactorbComponent;
  let fixture: ComponentFixture<ContactorbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactorbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactorbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
