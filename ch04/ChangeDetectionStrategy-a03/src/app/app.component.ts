import { Component, OnInit } from '@angular/core';
import { Stock } from '../app/model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Change Detection Strategy';

  public stock: Stock;
  private counter: number = 1;

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company','TSC',85,90);   
  }

  onToggleFavorite(stock: Stock) {
    // This will update the value in the stock item component
    // because it is triggered as a result of an event
    console.log('favorite for stock ', stock, ' was triggered');
    this.stock.favorite = !this.stock.favorite;
  }

  changeStockObject() {
    // This will update the value in the stock item component
    // because we are creating a new reference for the stock input
    this.stock = new Stock('Test Stock Company - ' + this.counter++,'TSC',85,90);   
  }

  changeStockPrice() {
    // This will not upddate the value in the stock item component because
    // it is changing the same reference and angular will not check for it
    // in the OnPush change detection stratgy
    this.stock.price += 10;
  }

}
