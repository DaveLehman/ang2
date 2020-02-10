// ISOLATED UNIT TEST EXAMPLE
// Isolated because it has nothing to do with Angular just a plain vanilla JavaScript
// test that instantiates/executes classes and methods
import { AppComponent } from '../app/app.component';
import { Stock } from '../app/model/stock';

describe('AppComponent', () => {
  it('should have stock instantiated on ngInit', () => {
    const appComponent = new AppComponent();
    expect(appComponent.stock).toBeUndefined();
    appComponent.ngOnInit();
    expect(appComponent.stock).toEqual(
      new Stock('Test Stock Company', 'TSC', 85, 80));
  });

  it('should have toggleStockFavorite', () => {
    const appComponent = new AppComponent();
    appComponent.ngOnInit();
    expect(appComponent.stock.favorite).toBeFalsy();
    appComponent.onToggleFavorite(new Stock('Test','TEST',54,55));
    expect(appComponent.stock.favorite).toBeTruthy();
    appComponent.onToggleFavorite(new Stock('Test','TEST',54,55));
    expect(appComponent.stock.favorite).toBeFalsy();
  });
});
