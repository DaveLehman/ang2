import { Component, OnInit } from '@angular/core';
import { SimpleChanges, OnChanges, OnDestroy, DoCheck, AfterViewChecked,
  AfterViewInit, AfterContentChecked, AfterContentInit } from '@angular/core';
import { Stock } from '../app/model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy, 
  DoCheck, AfterViewChecked, AfterViewInit, AfterContentChecked,
  AfterViewInit, AfterContentInit  {

  title = 'Stock Market with Component Life Cycle Hooks';

  public stock: Stock;

  onToggleFavorite(stock: Stock) {
    console.log('favorite for stock ', stock, ' was triggered');
    this.stock.favorite = !this.stock.favorite;
  }

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company','TSC',85,90);
    console.log('App Component - OnInit');
 }


  ngAfterViewInit(): void {
      console.log('App Component - After View Init');
  }

  ngAfterViewChecked(): void {
    console.log('App Component - After View Checked');
}

  ngAfterContentInit(): void {
    console.log('App Component - After Content Init');
  }

  ngAfterContentChecked(): void {
    console.log('App Component - After Content Checked');
  }

  ngDoCheck(): void {
    console.log('App Component - Do Check');
  }

  ngOnChanges(): void {
    console.log('App Component - OnChanges');
  }

  ngOnDestroy(): void {
    console.log('App Component - On Destroy');
}





}
