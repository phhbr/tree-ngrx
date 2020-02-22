import {Action, createReducer, on} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import * as PortfolioItemActions from './sales-group.actions';
import {SalesGroup} from './sales-group.model';

export const salesGroupKey = 'salesGroup';

export interface SalesGroupState extends EntityState<SalesGroup> {

}

export function selectSalesGroupId(a: SalesGroup): number {
  return a.id;
}

export function sortById(a: SalesGroup, b: SalesGroup): number {
  return a.id > b.id ? 1 : -1;
}

export const adapter: EntityAdapter<SalesGroup> = createEntityAdapter<SalesGroup>(
  {
    selectId: selectSalesGroupId,
    sortComparer: sortById,
  }
);

export const initialState: SalesGroupState = adapter.getInitialState({});

const salesGroupReducer = createReducer(
  initialState,
  on(PortfolioItemActions.addSalesGroups, (state, {salesGroups}) => adapter.addAll(salesGroups, state)),
  on(PortfolioItemActions.clearSalesGroups, (state) => adapter.removeAll(state))
);

export function reducer(state: SalesGroupState, action: Action) {
  return salesGroupReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
