import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteSubscriberComponent } from './quote-subscriber.component';

describe('QuoteSubscriberComponent', () => {
  let component: QuoteSubscriberComponent;
  let fixture: ComponentFixture<QuoteSubscriberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteSubscriberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
