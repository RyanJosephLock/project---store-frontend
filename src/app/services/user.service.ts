import { Injectable } from '@angular/core';

import { User } from '../models/users'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  checkoutUser: User = {
    fullname: '',
    address: '',
  }

  constructor() { }

  setCheckoutUser(user: User): void {
    this.checkoutUser.fullname = user.fullname;
    this.checkoutUser.address = user.address;
  }

  getCheckoutUser(): User {
    return this.checkoutUser;
  }

}
