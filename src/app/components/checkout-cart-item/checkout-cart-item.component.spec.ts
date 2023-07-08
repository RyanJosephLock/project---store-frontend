import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutCartItemComponent } from './checkout-cart-item.component';

describe('CheckoutCartItemComponent', () => {
  let component: CheckoutCartItemComponent;
  let fixture: ComponentFixture<CheckoutCartItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutCartItemComponent]
    });
    fixture = TestBed.createComponent(CheckoutCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
