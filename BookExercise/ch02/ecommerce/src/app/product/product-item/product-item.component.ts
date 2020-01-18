import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public product: Product;

  constructor() { }

  ngOnInit() {
    this.product = new Product('Tangled Masses of Cable!!',8,'../../../assets/ethertangle.jpg',false,0);
    console.log('Created a Product with price ' + this.product.productPrice);
  }

  incrementInCart(event) {
    console.log('incrementing '+this.product.productName);
    this.product.quantityInCart++;
  }

  decrementInCart(event) {
    if (this.product.quantityInCart > 0)
    {
      console.log('decrementing '+this.product.productName);
      this.product.quantityInCart--;
    }

  }

}
