import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CheckoutThankComponent } from './components/checkout-thank/checkout-thank.component';
import { CheckoutCartComponent } from './components/checkout-cart/checkout-cart.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { CheckoutCartItemComponent } from './components/checkout-cart-item/checkout-cart-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductListItemComponent,
    HeaderComponent,
    ProductInfoComponent,
    CheckoutComponent,
    CheckoutThankComponent,
    CheckoutCartComponent,
    CheckoutFormComponent,
    CheckoutCartItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
