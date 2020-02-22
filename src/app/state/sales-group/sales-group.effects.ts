import {SalesGroupDataService} from '../../services/sales-group-data.service';
import {SalesGroupState} from './sales-group.reducer';
import * as SalesGroupActions from './sales-group.actions';
import {Injectable} from '@angular/core';
import {Action, Store} from '@ngrx/store';
import {map, mergeMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {SalesGroup} from './sales-group.model';
import {Actions, createEffect, ofType} from '@ngrx/effects';

@Injectable()
export class SalesGroupEffects {

  /**
   * effect for loading portfolios from backend and saving them in entity store
   */
  loadSalesGroups$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(SalesGroupActions.loadSalesGroups),
    mergeMap(() => this.salesGroupService.getSalesGroups()
      .pipe(
        map((salesGroups: SalesGroup[]) => this.list_to_tree(salesGroups)),
        map((salesGroups: SalesGroup[]) => SalesGroupActions.addSalesGroups({salesGroups})),
      ))));

  constructor(private actions$: Actions,
              private store$: Store<SalesGroupState>,
              private salesGroupService: SalesGroupDataService) {
  }

  private list_to_tree(list): SalesGroup[] {
    // todo do we have to sort first so we get all 'parents' first?
    const idMap = {};
    let node;
    const roots = [];
    let i;
    for (i = 0; i < list.length; i += 1) {
      idMap[list[i].id] = i; // initialize the map
      list[i].children = []; // initialize the children
    }
    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      if (node.parentId != null) {
        // if you have dangling branches check that map[node.parentId] exists
        list[idMap[node.parentId]].children.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots.filter(item => !item.parentId);
  }
}
