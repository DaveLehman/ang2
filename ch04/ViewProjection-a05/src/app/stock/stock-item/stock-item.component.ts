import { Component, Input } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent {
  // The idea of content projection is to separate parts of the UI of the
  // component to not be part of the component itself. Like a carousel, where the
  // functionality of the carousel would be part of the component, but the content
  // shown by the carousel (a page, a picture, anything) is removed from the
  // carousel component. 
   @Input() public stock: Stock;

  constructor() { }

  toggleFavorite(event) {
    console.log('We are toggling the favorite state for this stock', event);
    this.stock.favorite = !this.stock.favorite;
  }

}
