import {createAction, props} from '@ngrx/store';
import {PortfolioItem} from './portfolio-item.model';

export const addPortfolioItem = createAction('[Portfolio Items/API] Add Portfolio Item',
  props<{ portfolioItem: PortfolioItem }>());
export const clearPortfolioItems = createAction('[Portfolio Items/API] Clear Portfolio Items');
