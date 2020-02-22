import {Component} from '@angular/core';
import {selectAllPortfolioItems, selectPortfolioItemTotal} from '../state/portfolio-item/portfolio-item.selector';
import {select, Store} from '@ngrx/store';
import {PortfolioItemState} from '../state/portfolio-item/portfolio-item.reducer';
import {ItemViewComponent} from '../item-view/item-view.component';
import {map} from 'rxjs/operators';
import {selectAllSalesGroups} from '../state/sales-group/sales-group.selector';
import {combineLatest} from 'rxjs';
import {PortfolioItem} from '../state/portfolio-item/portfolio-item.model';

@Component({
  selector: 'app-portfolio-item-view',
  templateUrl: '../item-view/item-view.component.html',
})
export class PortfolioItemViewComponent extends ItemViewComponent {
  itemCount$ = this.store$.pipe(select(selectPortfolioItemTotal));
  items$ = combineLatest(this.store$.pipe(select(selectAllPortfolioItems)),
    this.store$.pipe(select(selectAllSalesGroups)))
    .pipe(
      map(([portfolioItems, salesGroups]) => {
        const newItems = [];
        portfolioItems.forEach(portfolioItem => {
          const newPortfolioItem = {id: portfolioItem.id, name: portfolioItem.name} as PortfolioItem;
          const mappedSalesGroups = [];

          portfolioItem.salesGroups.forEach(sg => {
            const salesGroup = salesGroups.find(item => item.id === sg);
            if (salesGroup) {
              mappedSalesGroups.push(salesGroup.name);
            }
          });
          newPortfolioItem.salesGroups = mappedSalesGroups;
          newItems.push(newPortfolioItem);
        });
        return newItems;
      })
    );
  title = 'Portfolio Items';

  constructor(private store$: Store<PortfolioItemState>) {
    super();
  }
}
