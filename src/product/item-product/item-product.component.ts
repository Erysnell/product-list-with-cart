import { Component, Input } from '@angular/core';
import { CounterButtonComponent } from '../../counter-button/counter-button.component';

@Component({
  selector: 'item-product',
  standalone: true,
  imports: [CounterButtonComponent],
  templateUrl: './item-product.component.html',
   styleUrl: './item-product.component.css'
})
export class ItemProductComponent {

  public showCounter = false;

  @Input() item = {
    image: {
        thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
        mobile: "./assets/images/image-waffle-mobile.jpg",
        tablet: "./assets/images/image-waffle-tablet.jpg",
        desktop: "./assets/images/image-waffle-desktop.jpg"
      },
      name: "Waffle with Berries",
      category: "Waffle",
      price: 6.50
  }

  addToCart() {
    this.showCounter = true;
  }

}   