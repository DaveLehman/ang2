import { Component, OnInit } from '@angular/core';
import { Stock } from '../app/model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Stock Market with @Input@Output';

  public stock: Stock;

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company','TSC',85,90);
  }

  onToggleFavorite(stock: Stock) {
    console.log('favorite for stock ', stock, ' was triggered');
    this.stock.favorite = !this.stock.favorite;
  }
}
