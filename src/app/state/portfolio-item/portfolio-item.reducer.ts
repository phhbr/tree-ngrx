import {Action, createReducer, on} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {PortfolioItem} from './portfolio-item.model';
import * as PortfolioItemActions from './portfolio-item.actions';

export const portfolioItemKey = 'portfolioItem';

export interface PortfolioItemState extends EntityState<PortfolioItem> {

}

export function selectPortfolioId(a: PortfolioItem): number {
  return a.id;
}

export function sortById(a: PortfolioItem, b: PortfolioItem): number {
  return a.id > b.id ? 1 : -1;
}

export const adapter: EntityAdapter<PortfolioItem> = createEntityAdapter<PortfolioItem>(
  {
    selectId: selectPortfolioId,
    sortComparer: sortById,
  }
);

export const initialState: PortfolioItemState = adapter.getInitialState({});

const portfolioItemReducer = createReducer(
  initialState,
  on(PortfolioItemActions.addPortfolioItem, (state, {portfolioItem}) => adapter.addOne(portfolioItem, state)),
  on(PortfolioItemActions.clearPortfolioItems, (state) => adapter.removeAll(state))
);

export function reducer(state: PortfolioItemState, action: Action) {
  return portfolioItemReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
