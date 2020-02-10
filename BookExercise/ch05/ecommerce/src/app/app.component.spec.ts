import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductItemComponent } from '../app/product/product-item/product-item.component';
import { ProductListComponent } from '../app/product/product-list/product-list.component';


describe('AppComponent', () => {

  describe('Simple, No Angular Unit Test', () => {
    it('should have AppComponent defined', () => {
      const appComponent = new AppComponent();
      expect(appComponent).toBeDefined();
    });
  });

  describe('Angular-Aware Tests', () => {
    let fixture, component;
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent,
          ProductListComponent,
          ProductItemComponent,
        ],
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should load title', () => {
      const titleEl = fixture.debugElement.query(By.css('h1'));
      expect(titleEl.nativeElement.textContent.trim()).toEqual('Welcome to Ecommerce');
    });

    it('should load a product list', () => {
      const productList = fixture.productList;
      expect(productList).toBeDefined;
      const listEl = fixture.debugElement.query(By.css('app-product-list'));
      expect(listEl).toBeDefined();
    });
  });
});
