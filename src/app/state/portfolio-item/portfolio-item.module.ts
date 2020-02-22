import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import * as fromPortfolioItem from './portfolio-item.reducer';
import {reducer as portfolioItemReducer} from './portfolio-item.reducer';
import {StoreModule} from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromPortfolioItem.portfolioItemKey, portfolioItemReducer),
  ],
})
export class PortfolioItemModule {
}
