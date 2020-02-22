import {createAction, props} from '@ngrx/store';
import {SalesGroup} from './sales-group.model';

export const loadSalesGroups = createAction('[Sales Group/API Load Sales Groups');
export const addSalesGroups = createAction('[Sales Group/API] Add Sales Groups',
  props<{ salesGroups: SalesGroup[] }>());
export const clearSalesGroups = createAction('[Sales Group/API] Clear Sales Groups');
