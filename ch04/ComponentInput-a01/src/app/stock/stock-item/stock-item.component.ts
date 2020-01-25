import { Component, Input } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent {
  // We have removed all instantiation logic from the component,(including OnInit)  and marked the stock 
  // variable as an input. Now woll look for AppComponent to provide the initialization values.
  @Input() public stock: Stock;

  constructor() { }

  toggleFavorite(event) {
    console.log('We are toggling the favorite state for this stock', event);
    this.stock.favorite = !this.stock.favorite;
  }

}
