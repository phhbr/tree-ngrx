import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import * as fromSalesGroup from './sales-group.reducer';
import {reducer as portfolioItemReducer} from './sales-group.reducer';
import {StoreModule} from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromSalesGroup.salesGroupKey, portfolioItemReducer),
  ],
})
export class SalesGroupModule {
}
