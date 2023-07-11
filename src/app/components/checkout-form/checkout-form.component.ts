import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout-form',
  templateUrl: 'checkout-form.component.html',
  styleUrls: ['checkout-form.component.css']
})
export class CheckoutFormComponent {

  fullname: string = '';
  address: string = '';
  card: string = '';
  
  // @Output() addPost: EventEmitter<any> = new EventEmitter();

  submitForm(): void {
    const user = {
      fullname: this.fullname,
      address: this.address,
      card: this.card
    }

    // this.addPost.emit(post);

    this.fullname='';
    this.address='';
    this.card='';

  }

}