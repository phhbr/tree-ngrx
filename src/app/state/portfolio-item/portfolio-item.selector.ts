import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromPortfolioItem from './portfolio-item.reducer';
import {portfolioItemKey} from './portfolio-item.reducer';

export const selectPortfolioItemState = createFeatureSelector<fromPortfolioItem.PortfolioItemState>(portfolioItemKey);

export const selectPortfolioItemIds = createSelector(
  selectPortfolioItemState,
  fromPortfolioItem.selectIds
);

export const selectPortfolioItemEntities = createSelector(
  selectPortfolioItemState,
  fromPortfolioItem.selectEntities
);

export const selectAllPortfolioItems = createSelector(
  selectPortfolioItemState,
  fromPortfolioItem.selectAll
);

export const selectPortfolioItemTotal = createSelector(
  selectPortfolioItemState,
  fromPortfolioItem.selectTotal
);
