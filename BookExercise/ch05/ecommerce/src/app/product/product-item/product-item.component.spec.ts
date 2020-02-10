import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProductItemComponent } from './product-item.component';
import { Product } from '../../model/product';
import { ProductQuantityChange } from '../../model/product-quantity-change';

describe('ProductItem Component', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = {
      productID: '2',
      productName: 'Product Test',
      productImage: '../../../assets/Nerd.jpg',
      productPrice: 80,
      productIsOnSale: true,
      productQuantityInCart: 2
    };
    fixture.detectChanges();
  });

  it('should render the product correctly', () => {
    // We added these CSS classes to the component template as well!
    const nameEl = fixture.debugElement.query(By.css('.name'));
    expect(nameEl.nativeElement.textContent).toEqual(component.product.productName + ' -- ' + component.product.productID);
    const priceEl = fixture.debugElement.query(By.css('.price'));
    expect(priceEl.nativeElement.textContent).toEqual('$ ' + component.product.productPrice);
    const qtyEl = fixture.debugElement.query(By.css('.qty'));
    expect(qtyEl.nativeElement.textContent).toEqual('2');
  });

    it('should handle quantity increment correctly', () => {
    let quantityChange: ProductQuantityChange;
    component.quantityChange.subscribe(change => quantityChange = change);

    const incrementBtnEl = fixture.debugElement.query(By.css('button.increment'));
    incrementBtnEl.triggerEventHandler('click', null);

    expect(quantityChange).toBeDefined();
    expect(quantityChange.changeInQuantity).toEqual(1);
    expect(quantityChange.product.productID).toEqual('2');
  });

  it('should handle quantity decrement correctly', () => {
    let quantityChange: ProductQuantityChange;
    component.quantityChange.subscribe(change => quantityChange = change);

    const decrementBtnEl = fixture.debugElement.query(By.css('button.decrement'));
    decrementBtnEl.triggerEventHandler('click', null);

    expect(quantityChange).toBeDefined();
    expect(quantityChange.changeInQuantity).toEqual(-1);
    expect(quantityChange.product.productID).toEqual('2');

  });

});
