import {Component, OnInit} from '@angular/core';
import {addPortfolioItem, clearPortfolioItems} from '../state/portfolio-item/portfolio-item.actions';
import {Store} from '@ngrx/store';
import {PortfolioItemState} from '../state/portfolio-item/portfolio-item.reducer';
import {PortfolioItem} from '../state/portfolio-item/portfolio-item.model';
import {createSalesGroupAssignments} from '../../assets/sales-group-data.mock';

@Component({
  selector: 'app-portfolio-item-control',
  templateUrl: './portfolio-item-control.component.html',
  styleUrls: ['./portfolio-item-control.component.css']
})
export class PortfolioItemControlComponent implements OnInit {
  private id: 0;

  constructor(private store$: Store<PortfolioItemState>) {
  }

  ngOnInit() {
    this.onClearPortfolioItemsClicked();
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(() => this.onAddPortfolioItemClicked());
  }

  onAddPortfolioItemClicked() {
    this.id++;
    const portfolioItem = {
      id: this.id,
      name: 'Portfolio Item mit der Id: ' + this.id,
      salesGroups: createSalesGroupAssignments()
    } as PortfolioItem;
    this.store$.dispatch(addPortfolioItem({portfolioItem}));
  }

  onClearPortfolioItemsClicked() {
    this.id = 0;
    this.store$.dispatch(clearPortfolioItems());
  }
}
