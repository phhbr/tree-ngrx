import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ItemViewComponent} from '../item-view/item-view.component';
import {SalesGroupState} from '../state/sales-group/sales-group.reducer';
import {selectAllSalesGroups, selectSalesGroupTotal} from '../state/sales-group/sales-group.selector';
import {loadSalesGroups} from '../state/sales-group/sales-group.actions';

@Component({
  selector: 'app-sales-group-view',
  templateUrl: '../item-view/item-view.component.html',
})
export class SalesGroupViewComponent extends ItemViewComponent implements OnInit {
  itemCount$ = this.store$.pipe(select(selectSalesGroupTotal));
  items$ = this.store$.pipe(select(selectAllSalesGroups));
  title = 'Plain Sales Groups';

  constructor(private store$: Store<SalesGroupState>) {
    super();
  }

  ngOnInit() {
    this.store$.dispatch(loadSalesGroups());
  }
}
