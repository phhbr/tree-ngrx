import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {PortfolioItemState} from '../state/portfolio-item/portfolio-item.reducer';

@Component({
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent {
  itemCount$;
  items$;
  title: string;

  constructor() {
  }

}
