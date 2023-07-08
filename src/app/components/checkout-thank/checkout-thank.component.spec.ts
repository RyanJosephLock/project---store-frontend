import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutThankComponent } from './checkout-thank.component';

describe('CheckoutThankComponent', () => {
  let component: CheckoutThankComponent;
  let fixture: ComponentFixture<CheckoutThankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutThankComponent]
    });
    fixture = TestBed.createComponent(CheckoutThankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
