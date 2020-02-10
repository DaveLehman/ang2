import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductQuantityChange } from '../../model/product-quantity-change';

@Component({
  selector: 'app-product-list',
  template: `<table><tr valign="top"><td *ngFor="let product of products">
    <app-product-item [product]="product"
    (quantityChange)="onQuantityChange($event)"></app-product-item>
    </td></tr></table>
     `,
  styles: []
})
export class ProductListComponent implements OnInit {

  public products: Array<Product>;

  constructor() { }

  ngOnInit() {
    this.products = [
      {
        productID: 'TMC01',
        productName: 'Tangled Masses of Cable!!',
        productImage: '../../../assets/ethertangle.jpg',
        productPrice: 10,
        productIsOnSale: true,
        productQuantityInCart: 0
      },
      {
        productID: 'NG01',
        productName: 'Nerd Guy',
        productImage: '../../../assets/Nerd.jpg',
        productPrice: 50,
        productIsOnSale: false,
        productQuantityInCart: 0,
      },
      {
        productID: 'NE01',
        productName: 'Any key: Your answer to "Press any key to continue"',
        productImage: '../../../assets/questionbutton.jpg',
        productPrice: 12,
        productIsOnSale: false,
        productQuantityInCart: 0,
      }
    ]
  }

  onQuantityChange(change: ProductQuantityChange) {
    const product = this.products.find(prod => {
      return change.product.productID === prod.productID;
    });
    product.productQuantityInCart += change.changeInQuantity;
    
  }

}

