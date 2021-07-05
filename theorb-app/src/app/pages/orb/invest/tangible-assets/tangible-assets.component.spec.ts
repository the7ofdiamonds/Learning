import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TangibleAssetsComponent } from './tangible-assets.component';

describe('TangibleAssetsComponent', () => {
  let component: TangibleAssetsComponent;
  let fixture: ComponentFixture<TangibleAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TangibleAssetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TangibleAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
