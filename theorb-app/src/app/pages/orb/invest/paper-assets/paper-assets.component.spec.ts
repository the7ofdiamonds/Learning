import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperAssetsComponent } from './paper-assets.component';

describe('PaperAssetsComponent', () => {
  let component: PaperAssetsComponent;
  let fixture: ComponentFixture<PaperAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaperAssetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
