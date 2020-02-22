import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {salesGroupMasterData} from '../../assets/sales-group-data.mock';
import {SalesGroup} from '../state/sales-group/sales-group.model';

@Injectable({
  providedIn: 'root'
})
export class SalesGroupDataService {

  constructor() {
  }

  getSalesGroups(): Observable<SalesGroup[]> {
    return of([...salesGroupMasterData]).pipe(delay(1000));
  }
}
