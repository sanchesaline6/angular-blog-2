import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPromoComponent } from './box-promo.component';

describe('BoxPromoComponent', () => {
  let component: BoxPromoComponent;
  let fixture: ComponentFixture<BoxPromoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxPromoComponent]
    });
    fixture = TestBed.createComponent(BoxPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
