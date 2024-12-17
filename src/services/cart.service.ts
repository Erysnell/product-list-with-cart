import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: { [key: string]: number } = {};

  incrementItem(productName: string): number {
    if (productName in this.cartItems) {
      this.cartItems[productName]++;
    } else {
      this.cartItems[productName] = 1;
    }
    return this.cartItems[productName];
  }

  decrementItem(productName: string): number {
    if (productName in this.cartItems) {
      this.cartItems[productName]--;
      if (this.cartItems[productName] === 0) {
        delete this.cartItems[productName];
        return 0;
      }
      return this.cartItems[productName];
    }
    return 0;
  }

  getCartItems(): { [key: string]: number } {
    return this.cartItems;
  }
}
