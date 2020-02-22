import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {debug} from './meta.reducer';
import * as fromPortfolioItem from './portfolio-item/portfolio-item.reducer';
import * as fromSalesGroup from './sales-group/sales-group.reducer';

export interface AppState {
  [fromPortfolioItem.portfolioItemKey]: fromPortfolioItem.PortfolioItemState;
  [fromSalesGroup.salesGroupKey]: fromSalesGroup.SalesGroupState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromPortfolioItem.portfolioItemKey]: fromPortfolioItem.reducer,
  [fromSalesGroup.salesGroupKey]: fromSalesGroup.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [debug] : [];
