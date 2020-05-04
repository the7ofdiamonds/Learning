import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceSubscriberComponent } from './invoice-subscriber.component';

describe('InvoiceSubscriberComponent', () => {
  let component: InvoiceSubscriberComponent;
  let fixture: ComponentFixture<InvoiceSubscriberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceSubscriberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
