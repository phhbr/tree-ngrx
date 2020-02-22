import * as fromSalesGroup from './sales-group.reducer';

/**
 * mapping for feature key / feature state
 */
export interface SalesGroup {
    [fromSalesGroup.salesGroupKey]: fromSalesGroup.SalesGroupState;
}
