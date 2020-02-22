import * as fromPortfolioItem from './portfolio-item.reducer';

/**
 * mapping for feature key / feature state
 */
export interface PortfolioItem {
    [fromPortfolioItem.portfolioItemKey]: fromPortfolioItem.PortfolioItemState;
}
