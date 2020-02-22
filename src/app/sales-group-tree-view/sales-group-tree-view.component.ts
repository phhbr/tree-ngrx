import {Component, OnInit} from '@angular/core';
import {TreeModel, TreeNode} from 'angular-tree-component';
import {SalesGroup} from '../state/sales-group/sales-group.model';
import {SalesGroupState} from '../state/sales-group/sales-group.reducer';
import {select, Store} from '@ngrx/store';
import {selectAllSalesGroups} from '../state/sales-group/sales-group.selector';
import {Observable} from 'rxjs';
import {TreeOptions} from 'angular-tree-component/dist/models/tree-options.model';


@Component({
  selector: 'app-sales-group-tree-view',
  templateUrl: './sales-group-tree-view.component.html',
  styleUrls: ['./sales-group-tree-view.component.css']
})
export class SalesGroupTreeViewComponent implements OnInit {
  options: TreeOptions = new TreeOptions({
    allowDrag: (node) => {
      return true;
    },
    allowDrop: (node) => {
      return true;
    },
    actionMapping: {
      mouse: {
        drop: (tree: TreeModel, node: TreeNode, $event: any, {from, to}: { from: any, to: any }) => {
          // custom action. parameters: from = node, to = {parent, index}
        }
      }
    }
  });
  nodes$: Observable<SalesGroup[]>;


  constructor(private store$: Store<SalesGroupState>) {
    this.nodes$ = this.store$.pipe(select(selectAllSalesGroups));
  }

  ngOnInit() {
  }

  doStuff($event: MouseEvent) {
    alert($event);
  }
}
