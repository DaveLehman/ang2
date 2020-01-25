import { Component, OnInit } from '@angular/core';
import { Stock } from './model/stock';
// added OnInit and Stock
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Stock Market App - Stock using @input';

  public stockObj: Stock;

  ngOnInit(): void {
    this.stockObj = new Stock('Test Stock Company','TSC', 85, 80);
    console.log(this.stockObj.code , ' is created');
  }
}
