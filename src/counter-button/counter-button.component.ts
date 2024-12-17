// cart-button.component.ts
import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'counter-button',
  standalone: true,
  imports: [CommonModule],
  template: `
   <button class="counter-button">
     <img id="img" src="/assets/images/dash-circle.svg" alt="" (click)="decrementItem()">
     <span class="counter">{{quantity}}</span>
     <img id="img" src="/assets/images/plus-circle.svg" alt="" (click)="incrementItem()">
   </button>
  `,
  styles: [
    `
    .counter-button{
      position: relative;
    width: 150px;
    height: 35px;
    border-radius: 50px;
    border: 1px solid var(--rose-300);
    left: 20%;
    bottom: 2.5px;
    background-color: brown;
    color: black;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    transform: translateY(-50%); 
    }
    
    `
  ]
})
export class CounterButtonComponent {
  @Input() productName: string = "";
  quantity = 0;

  constructor(private cartService: CartService) {}

  incrementItem(): void {
    this.quantity = this.cartService.incrementItem(this.productName);
  }

  decrementItem(): void {
    this.quantity = this.cartService.decrementItem(this.productName);
    // if (this.quantity === 0) {
    //   showCounter = false;
    // }
  }


}
