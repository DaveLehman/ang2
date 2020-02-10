import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../model/product';
import { ProductQuantityChange } from '../../model/product-quantity-change';
import { By } from '@angular/platform-browser'; 

describe('ProductList Component', () => {

  describe('Isolated unit tests', () => {

    it('Should create 3 stocks on init', () => {
      const component = new ProductListComponent();
      component.ngOnInit();
      expect(component.products.length).toEqual(3);
    });

    it('Should find and update quantity onQuantityChange', () => {
      const component = new ProductListComponent();
      component.ngOnInit();

      assertProducts(component.products, [0, 0, 0]);
      component.onQuantityChange({changeInQuantity: 2, product: getProduct('NG01')});

      assertProducts(component.products, [0, 2, 0]);

      component.onQuantityChange({changeInQuantity: 2, product: getProduct('NG01')});
      component.onQuantityChange({changeInQuantity: 1, product: getProduct('TMC01')});
      assertProducts(component.products, [1, 4, 0]);

      component.onQuantityChange({changeInQuantity: -3, product: getProduct('NG01')});
      assertProducts(component.products, [1, 1, 0]);
    });
  });

  describe('Angular-aware tests', () => {
    let fixture, component;

      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ ProductListComponent, ProductItemComponent ]
        }).compileComponents();
      }));

      beforeEach(() => {
        fixture = TestBed.createComponent(ProductListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

      it('should render three product list items', () => {
        const productItems = fixture.debugElement.queryAll(By.css('app-product-item'));
        expect(productItems.length).toEqual(3);
        assertProduct(productItems[0], 'Tangled Masses of Cable!! -- TMC01', 10, 0);
        assertProduct(productItems[1], 'Nerd Guy -- NG01', 50, 0);
        assertProduct(productItems[2], 'Any key: Your answer to "Press any key to continue" -- NE01', 12, 0);
      });

      it('should handle increment/decrement item correctly from child product', () => {
        const productItems = fixture.debugElement.queryAll(By.css('app-product-item'));

        assertProduct(productItems[1], 'Nerd Guy -- NG01', 50, 0);
        const incrementBtnForSecondProduct = productItems[1].query(By.css('button.increment'));
        incrementBtnForSecondProduct.triggerEventHandler('click', null);
        fixture.detectChanges();
        assertProduct(productItems[1], 'Nerd Guy -- NG01', 50, 1);
        expect(component.products[1].productQuantityInCart).toEqual(1);

        const decrementBtnForSecondProduct = productItems[1].query(By.css('button.decrement'));
        decrementBtnForSecondProduct.triggerEventHandler('click', null);
        fixture.detectChanges();
        assertProduct(productItems[1], 'Nerd Guy -- NG01', 50, 0);
        expect(component.products[1].productQuantityInCart).toEqual(0);
      });
  });
});

function assertProduct(element, name, price, qty) {
  const nameEl = element.query(By.css('.name'));
  expect(nameEl.nativeElement.textContent).toEqual(name);
  const priceEl = element.query(By.css('.price'));
  expect(priceEl.nativeElement.textContent).toEqual('$ ' + price);
  const qtyEl = element.query(By.css('.qty'));
  expect(qtyEl.nativeElement.textContent).toEqual(qty + '');
}

function assertProducts(products, expectedQuantities) {
  expect(products[0].productID).toEqual('TMC01');
  expect(products[0].productQuantityInCart).toEqual(expectedQuantities[0]);
  expect(products[1].productID).toEqual('NG01');
  expect(products[1].productQuantityInCart).toEqual(expectedQuantities[1]);
  expect(products[2].productID).toEqual('NE01');
  expect(products[2].productQuantityInCart).toEqual(expectedQuantities[2]);
}

function getProduct(id: string) : Product {
  return {
    productID: id,
    productName: 'Test Product',
    productImage: 'Random Image',
    productIsOnSale: false,
    productPrice: 100,
    productQuantityInCart: 0
  };
}


