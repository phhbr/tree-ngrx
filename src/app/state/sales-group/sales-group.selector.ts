import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromSalesGroup from './sales-group.reducer';
import {salesGroupKey} from './sales-group.reducer';

export const selectSalesGroupState = createFeatureSelector<fromSalesGroup.SalesGroupState>(salesGroupKey);

export const selectSalesGroupIds = createSelector(
  selectSalesGroupState,
  fromSalesGroup.selectIds
);

export const selectSalesGroupEntities = createSelector(
  selectSalesGroupState,
  fromSalesGroup.selectEntities
);

export const selectAllSalesGroups = createSelector(
  selectSalesGroupState,
  fromSalesGroup.selectAll
);

export const selectSalesGroupTotal = createSelector(
  selectSalesGroupState,
  fromSalesGroup.selectTotal
);
